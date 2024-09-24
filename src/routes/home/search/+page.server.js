/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    console.log('server');
    let query = url.searchParams.get('search');
    return { query };
}