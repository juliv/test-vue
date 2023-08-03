// Индекс другого url с данными
export const getPageNumber = (path: string | null) => {
	const re = /page=(\d+)$/;
	const results = re.exec(path ?? '');
	return !results ? null : parseInt(results[1], 10);
};
