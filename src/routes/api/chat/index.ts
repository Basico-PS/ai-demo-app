import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export const post = async ({ request }: any) => {
	const body: {
		text: string;
		userMessage: boolean;
	}[] = await request.json();

	let promptValue =
		'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI';

	for (let i = 0; i < body.length; i++) {
		const chatMessage = body[i];

		if (chatMessage.userMessage) {
			promptValue = promptValue + '\n\nHuman: ' + chatMessage.text;
		} else {
			promptValue = promptValue + '\nAI: ' + chatMessage.text;
		}
	}

	console.log(promptValue);

	const response = await openai.createCompletion({
		model: 'text-davinci-002',
		prompt: promptValue + '\nAI:',
		stop: [' Human:', ' AI:'],
		max_tokens: 300
	});

	console.log(response.data);

	return {
		body: { ...response.data }
	};
};
