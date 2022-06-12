<script lang="ts">
	import { chatMessages } from '../../../lib/stores/chatMessages';
</script>

<ul class="">
	{#each $chatMessages as chatMessage}
		<div class="py-2">
			{#if chatMessage.userMessage}
				<div class="flex justify-end">
					<li
						class="bg-red-50 text-red-700 rounded-l-lg rounded-t-lg bg-contain px-4 py-2 inline-block"
					>
						<p>
							[YOU] {chatMessage.text}
						</p>
					</li>
				</div>
			{:else}
				<div class="flex justify-start">
					<li
						class="bg-gray-500 text-white rounded-r-lg rounded-t-lg bg-contain px-4 py-2 inline-block"
					>
						<p>
							[AI] {chatMessage.text}
						</p>
					</li>
				</div>
			{/if}
		</div>
	{/each}
</ul>
