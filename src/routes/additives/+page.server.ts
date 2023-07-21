import { getAllAdditives } from '$lib/server/database';
import type { Additive } from '$lib/server/database/types.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let additives : Additive[];
    additives = getAllAdditives();

    return {
        additives
    };
}