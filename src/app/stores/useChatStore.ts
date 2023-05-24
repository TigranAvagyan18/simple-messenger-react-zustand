import { Message } from '@src/components/chat/messages/message';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { chatsData } from '../data/messages';
import { useCurrentUser } from './useCurrentUser';

type ChatStore = {
	chats: {
		[key: string]: Array<Message>;
	};
	activeChatId: string | null;
	currentChatMessagesLength: number;
};

type Actions = {
	sendMessage: (message: string, chatId: string) => void;
	setActiveChatId: (id: string) => void;
};

export const useChatStore = create<ChatStore & Actions>()(
	devtools(
		immer((set) => ({
			chats: chatsData,
			activeChatId: null,
			currentChatMessagesLength: 0,
			sendMessage: (message: string, chatId: string) =>
				set((state) => {
					const currentUser = useCurrentUser.getState();
					if (!state.chats[chatId]) {
						state.chats[chatId] = [];
					}
					state.chats[chatId].push({ message, ...currentUser, messageId: Math.random().toString() });
					state.currentChatMessagesLength += 1;
				}),
			setActiveChatId: (chatId) =>
				set((state) => {
					state.activeChatId = chatId;
					state.currentChatMessagesLength = state.chats[chatId]?.length || 0;
				})
		}))
	)
);
