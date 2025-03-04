
const url = `https://strapi-vywd-production.up.railway.app/api/objets`;

const reponse =  await fetch(url)
const objets = await reponse.json();

export function load({ params }) {
	return {
		objets
	};
}
