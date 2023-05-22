type AddClassNamePropsT = {
	duration: number;
	inClassName?: string;
	outClassName?: string;
};

export const addClassName = (
	node: Node,
	{ duration, inClassName = 'entering', outClassName = 'leaving' }: AddClassNamePropsT
) => {
	if (!(node instanceof HTMLElement)) throw new Error('Node must be a HTMLElement');

	node.addEventListener('introstart', () => {
		node.classList.add(inClassName);
	});

	node.addEventListener('introend', () => {
		node.classList.remove(inClassName);
	});

	node.addEventListener('outrostart', () => {
		node.classList.add(outClassName);
	});
	node.addEventListener('outroend', () => {
		node.classList.remove(outClassName);
	});

	return {
		duration
	};
};
