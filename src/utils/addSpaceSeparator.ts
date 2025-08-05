export function addSpaceSeparator(number: number) {
	const formattedWithComma = new Intl.NumberFormat('en-US').format(number);
	return formattedWithComma.replace(/,/g, ' ');
}
