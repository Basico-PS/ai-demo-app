<script lang="ts">
	import { chatMessages } from '../../../lib/stores/chatMessages';

	let state: 'IDLE' | 'SENDING' = 'IDLE';
	let newMessage = '';

	$: $chatMessages, scrollChatMessage();

	const scrollChatMessage = async () => {
		await new Promise((res) => setTimeout(res, 50));
		if ($chatMessages.length > 0) {
			const chatMessagesElement = document.getElementById('chat-messages');

			if (chatMessagesElement) {
				if (chatMessagesElement.scrollTop !== chatMessagesElement.scrollHeight) {
					if (chatMessagesElement) {
						chatMessagesElement.scrollTo(0, chatMessagesElement.scrollHeight);
					}
				}
			}
		}
	};

	const sendMessage = async () => {
		state = 'SENDING';

		newMessage = newMessage.trim();

		if (newMessage.length > 0) {
			$chatMessages = [
				...$chatMessages,
				{
					userMessage: true,
					text: newMessage
				},
				{
					userMessage: false,
					text: '...'
				}
			];
			newMessage = '';

			const response = await fetch('/api/chat', {
				method: 'POST',
				body: JSON.stringify([...$chatMessages])
			});

			const responseBody = await response.json();

			const responseBodyChoices = responseBody.choices;

			if (responseBodyChoices.length > 0) {
				$chatMessages = [
					...$chatMessages.slice(0, -1),
					{
						userMessage: false,
						text: responseBodyChoices[0].text.trim()
					}
				];
			}
		}

		state = 'IDLE';
	};
</script>

<form action="post">
	<label for="new-message" class="block text-lg font-medium text-gray-700">
		Write a new message to the AI
	</label>
	<div class="my-1">
		<textarea
			bind:value={newMessage}
			rows="4"
			cols="100"
			name="new-message"
			id="new-message"
			class="shadow-sm focus:ring-basico-red focus:border-basico-red block w-full text-sm sm:text-base border-gray-300 rounded-md"
			disabled={state === 'SENDING'}
		/>
	</div>
	<div class="flex justify-end space-x-2 pt-2">
		<button
			on:click={() => {
				if (
					confirm(
						'Are you sure you want to clear the chat? You will loose all your messages with the AI.'
					)
				) {
					$chatMessages = [];
				}
			}}
			type="button"
			class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm sm:text-base leading-4 font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			disabled={state === 'SENDING'}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="-ml-0.5 mr-2 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			Clear chat
		</button>
		<button
			on:click={() => {
				sendMessage();
			}}
			type="button"
			class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm sm:text-base leading-4 font-medium rounded-md text-white bg-basico-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-basico-red"
			disabled={state === 'SENDING'}
		>
			<svg
				class="-ml-0.5 mr-2 h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
				<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
			</svg>
			Send
		</button>
	</div>
</form>
