/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		let data = (await request.formData()).get('search')
        let result = await getResult(data).then(a => console.log(a));
        return {
            returnData: result
        }
	}
};

/**
	 * @param {any} input
	 */
async function getResult(input) {
    let result;
    await fetch(`https://apis.data.go.kr/B553748/CertImgListServiceV3/getCertImgListServiceV3?serviceKey=I6j8ftZVndEWKbhSsmcwF%2FEBEDj0WJVOA7EBUtK46S8ro4LjwzywS326Q2PqYYasxppLCtv5XBHLm08TRnCpPw%3D%3D&prdlstNm=${input}&returnType=json&pageNo=1&numOfRows=10`)
        .then(res => res.json())
        .then(res => result = (res.body.items));
    // await console.log(result);
    return result;
}