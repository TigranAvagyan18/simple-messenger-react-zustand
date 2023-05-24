import { useChatStore } from '@src/app/stores';
import ContactBlock from './block';

const contacts = [
	{
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		userName: 'User87',
		message: 'Ok, see you at the subway in a bit.',
		isOnline: true
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
		userName: 'User42',
		message: 'Hey, Are you there?',
		isOnline: true
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
		userName: 'User61',
		message: 'You sent a photo.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
		userName: 'User29',
		message: 'You missed a call John.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
		userName: 'User70',
		message: 'You sent a video.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
		userName: 'User97',
		message: 'Ah, it was an awesome one night stand.',
		isOnline: true
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
		userName: 'User32',
		message: 'You are a great human being.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
		userName: 'User51',
		message: 'WTF dude!! absofuckingloutely.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
		userName: 'User16',
		message: 'you called Brad.',
		isOnline: true
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
		userName: 'User41',
		message: 'Tom called you.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
		userName: 'User58',
		message: 'How can i forget about that man!.',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
		userName: 'User12',
		message: "Alright! let's catch up tomorrow!.",
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
		userName: 'User76',
		message: 'How can you leave Rose dude. I hate you!',
		isOnline: false
	},
	{
		avatar: 'https://randomuser.me/api/portraits/men/63.jpg',
		userName: 'User8',
		message: 'Happy birthday to you my friend!',
		isOnline: false
	}
];

const Contacts = () => {
	const activeChatId = useChatStore((state) => state.activeChatId);
	const setActiveChatId = useChatStore((state) => state.setActiveChatId);
	return (
		<div className="contacts flex-1 overflow-y-scroll p-2">
			{contacts.map((contact, id) => (
				<ContactBlock
					{...contact}
					id={id}
					active={activeChatId === id.toString()}
					onClick={() => setActiveChatId(id.toString())}
					key={contact.userName + id}
				/>
			))}
		</div>
	);
};

export default Contacts;
