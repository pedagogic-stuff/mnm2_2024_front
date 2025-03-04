


const f = await fetch('https://strapi-vywd-production.up.railway.app/api/credit')
const credits = await f.json();

export function load() {
	return {
		credits
	};
}
