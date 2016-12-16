let reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;

export default function escapeRegExp(str: string): string {
	return str.replace(reEscapableChars, '\\$1');
}
