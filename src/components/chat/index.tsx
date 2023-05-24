import { useEffect, useRef } from 'react';
import { useChatStore } from '@src/app/stores';
import Messages from './messages';
import ChatSend from './send';

const Chat = () => {
	const chatId = useChatStore((state) => state.activeChatId);
	const currentChatMessagesLength = useChatStore((state) => state.currentChatMessagesLength);

	const messagesRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		if (messagesRef && messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, [currentChatMessagesLength]);

	return (
		<section className="flex flex-auto flex-col border-l border-gray-800">
			{chatId && (
				<>
					<div className="flex h-20 flex-none flex-row items-center justify-between border-b-2 border-gray-800 px-6 py-4 shadow" />
					<div className="flex flex-1 flex-col gap-2 overflow-y-scroll px-4 pt-4" ref={messagesRef}>
						<Messages chatId={chatId} />
					</div>
					<ChatSend />
				</>
			)}
		</section>
	);
};

export default Chat;
