import { findByIds } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const { make, model } = params;
	const modelInfo = findByIds(make, model);
	if (modelInfo === null) {
		throw error(404, { message: 'Not found' });
	}
	return { modelInfo };
};
