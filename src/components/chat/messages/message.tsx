export type Message = {
	message: string;
	userName: string;
	avatar: string | null;
	userId: string;
	messageId: string;
};

type Props = Message & {
	isFirstMessage: boolean;
	isLastMessage: boolean;
};

const Message = (props: Props) => {
	const { message, avatar, userId, isFirstMessage, isLastMessage } = props;

	const isMyMessage = userId === '123';

	const roundedCornersClassnames = () => {
		const defaulClassName = !isMyMessage ? 'rounded-r-3xl' : 'rounded-l-3xl';
		if (!isMyMessage) {
			if (isFirstMessage) return `rounded-t-3xl ${defaulClassName}`;
			if (isLastMessage) return `rounded-b-3xl ${defaulClassName}`;
		} else {
			if (isFirstMessage) return `rounded-t-3xl ${defaulClassName}`;
			if (isLastMessage) return `rounded-b-3xl ${defaulClassName}`;
		}
		return defaulClassName;
	};

	return (
		<div className={`flex flex-row ${isMyMessage ? 'justify-end' : 'justify-start'} ${!isFirstMessage && 'pl-12'} `}>
			{!isMyMessage && isFirstMessage && (
				<div className="relative mr-4 flex h-8 w-8 flex-shrink-0">
					<img className="h-full w-full rounded-full object-cover shadow-md" src={avatar || ''} alt="" />
				</div>
			)}
			<div className="messages grid grid-flow-row gap-2 text-sm text-white">
				<div className={`group flex ${isMyMessage ? 'flex-row-reverse' : 'flex-row'} items-center`}>
					<p className={`max-w-xs ${roundedCornersClassnames()} break-words bg-blue-700 px-6 py-3 lg:max-w-md`}>
						{message}
					</p>
					<button
						type="button"
						className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
					>
						<svg viewBox="0 0 20 20" className="h-full w-full fill-current">
							<path
								d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Message;
