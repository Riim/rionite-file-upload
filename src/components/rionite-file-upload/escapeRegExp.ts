let reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;

export function escapeRegExp(str: string): string {
	return str.replace(reEscapableChars, '\\$1');
}
