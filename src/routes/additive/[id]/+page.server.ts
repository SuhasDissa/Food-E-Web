import { error } from '@sveltejs/kit';
import { getAdditiveById } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const additive = getAdditiveById(params.id);

    if (additive) {
        return {additive};
    }

    throw error(404, 'Not found');
}