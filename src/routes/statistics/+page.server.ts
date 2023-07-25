import { getAdditivesCount, getHalalAdditivesCount } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const additiveCount = getAdditivesCount();
    const halalAdditiveCount = getHalalAdditivesCount();

    return {
        statistics: {
            all: additiveCount,
            halal: halalAdditiveCount,
            good: 0,
            normal: 0,
            bad: 0,
            unknown: additiveCount
        }
    };
}