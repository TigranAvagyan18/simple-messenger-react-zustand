import { Avatar } from '../avatar';

const ChatInfo = () => {
	return (
		<div className="flex flex-none flex-row items-center justify-between px-6 py-4 shadow">
			<div className="flex">
				<Avatar src="" size="md" />
				<div className="text-sm">
					<p className="font-bold">Scarlett Johansson</p>
					<p>Active 1h ago</p>
				</div>
			</div>

			<a href="#" className="ml-4 block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700">
				<svg viewBox="0 0 20 20" className="h-full w-full fill-current text-blue-500">
					<path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
				</svg>
			</a>
		</div>
	);
};

export default ChatInfo;
