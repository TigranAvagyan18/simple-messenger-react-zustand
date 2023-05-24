type ImageSize = 'sm' | 'lg';

type Props = {
	src: string | null;
	isOnline?: boolean;
	size: ImageSize;
};

const ImageSizes: Record<ImageSize, string> = {
	sm: 'w-8 h-8',
	lg: 'w-12 h-12'
};

export const Avatar = (props: Props) => {
	const { src, isOnline, size } = props;
	return (
		<div className={`relative flex flex-shrink-0 ${ImageSizes[size]}`}>
			<img className="h-full w-full rounded-full object-cover shadow-md" src={src || ''} alt="" />
			{isOnline && (
				<div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
					<div className="h-3 w-3 rounded-full bg-green-500"></div>
				</div>
			)}
		</div>
	);
};
