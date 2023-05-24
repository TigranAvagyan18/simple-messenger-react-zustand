import { Message } from '@src/components/chat/messages/message';

type ChatsData = {
	[key: string]: Array<Message>;
};

export const chatsData: ChatsData = {
	'0': [
		{
			message: 'Hello',
			avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
			userName: 'Dave Jordan',
			userId: '1',
			messageId: Math.random().toString()
		},
		{
			message: 'Hi!',
			avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
			userName: 'My user',
			userId: '123',
			messageId: Math.random().toString()
		},
		{
			message: 'Bruhv!',
			avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
			userName: 'My user',
			userId: '123',
			messageId: Math.random().toString()
		},
		{
			message: 'Nvm',
			avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
			userName: 'Dave Jordan',
			userId: '1',
			messageId: Math.random().toString()
		},
		{
			message: 'A lil sick',
			avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
			userName: 'Dave Jordan',
			userId: '1',
			messageId: Math.random().toString()
		},
		{
			message: 'Feeling great tho',
			avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
			userName: 'Dave Jordan',
			userId: '1',
			messageId: Math.random().toString()
		}
	]
};
