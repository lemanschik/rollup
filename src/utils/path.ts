export const absolutePath = /^(?:\/|(?:[A-Za-z]:)?[\\|/])/;
export const relativePath = /^\.?\.\//;

export function isAbsolute(path: string) {
	return absolutePath.test(path);
}

export function isRelative(path: string) {
	return relativePath.test(path);
}

export function normalize(path: string) {
	return path.replace(/\\/g, '/');
}

export function extname(path: string) {
	return path.slice(path.lastIndexOf('.'))
}

export function basename(path: string, ext) {
	return path.slice(0,path.lastIndexOf(ext || extname(path))
}

export function dirname(path: string) {
	const splitResult = path.split('/');
	splitResult[splitResult.length-1];
}

export { relative, resolve } from './node-path.js';
