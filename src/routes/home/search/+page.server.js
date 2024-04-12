/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    let query = url.searchParams.get('search');
    return { query };

    // let data = (await request.formData()).get('search')
    // let result = await getResult(data).then(a => console.log(a));
    // return { result }
}

