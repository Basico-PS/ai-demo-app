import { writable } from 'svelte-local-storage-store';

export const chatMessages = writable('chatMessages', <{ text: string; userMessage: boolean }[]>[]);
