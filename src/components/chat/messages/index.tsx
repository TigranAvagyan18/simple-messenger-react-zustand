import { useChatStore } from '@src/app/stores';
import Message from './message';

type Props = {
	chatId: string;
};

const Messages = (props: Props) => {
	const { chatId } = props;

	const chats = useChatStore((state) => state.chats);

	if (!chatId) return null;

	const messages = chats[chatId];

	return (
		<>
			{messages?.map((message, id) => {
				const isFirstMessage = message.userId !== messages[id - 1]?.userId;
				const isLastMessage = message.userId !== messages[id + 1]?.userId;
				return (
					<Message {...message} isFirstMessage={isFirstMessage} isLastMessage={isLastMessage} key={message.messageId} />
				);
			})}
		</>
	);
};

export default Messages;
