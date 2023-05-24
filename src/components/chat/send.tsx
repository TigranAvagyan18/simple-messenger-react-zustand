import { useChatStore } from '@src/app/stores';
import { useState } from 'react';

const ChatSend = () => {
	const [message, setMessage] = useState('');

	const chatId = useChatStore((state) => state.activeChatId);
	const sendMessage = useChatStore((state) => state.sendMessage);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!message) return;
		sendMessage(message, chatId!);
		setMessage('');
	};

	return (
		<div className="chat-footer flex-none">
			<div className="flex flex-row items-center p-4">
				<form className="relative flex-grow" onSubmit={handleSubmit}>
					<label>
						<input
							className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
							type="text"
							value={message}
							placeholder="Aa"
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button
							type="submit"
							className="absolute right-0 top-0 mr-3 mt-2 flex h-6 w-6 flex-shrink-0 text-blue-600 hover:text-blue-700 focus:outline-none"
						>
							<svg viewBox="0 0 24 24" className="h-full w-full fill-current">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
								></path>
							</svg>
						</button>
					</label>
				</form>
			</div>
		</div>
	);
};

export default ChatSend;
