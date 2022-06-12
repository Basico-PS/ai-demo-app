<script>
	import ChatMessages from '../../lib/components/chat/ChatMessages.svelte';
	import ChatInput from '../../lib/components/chat/ChatInput.svelte';
</script>

<div class="flex justify-center">
	<div class="p-10 max-w-7xl">
		<div id="chat-messages" class="max-h-96 no-scrollbar overflow-y-scroll">
			<div class="">
				<ChatMessages />
			</div>
		</div>

		<ChatInput />
	</div>
</div>
