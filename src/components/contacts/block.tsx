import { Avatar } from '../avatar';

type Props = {
	id: number | string;
	userName: string;
	message: string;
	avatar: string | null;
	isOnline: boolean;
	active: boolean;
	onClick: () => void;
};

const ContactBlock = (props: Props) => {
	const { userName, message, avatar, isOnline, active, onClick } = props;

	const activeClassname = active && 'bg-gray-800';

	return (
		<div
			className={`${activeClassname} relative flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-gray-800`}
			onClick={onClick}
		>
			<Avatar src={avatar} isOnline={isOnline} size="lg" />
			<div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
				<p>{userName}</p>
				<div className="flex items-center text-sm text-gray-600">
					<div className="min-w-0">
						<p className="truncate">{message}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBlock;
