
const artisansURL = `https://strapi-vywd-production.up.railway.app/api/ateliers?populate=*`;

const reponse =  await fetch(artisansURL)
const ateliers = await reponse.json();

const repHomepage = await fetch('https://strapi-vywd-production.up.railway.app/api/accueil?populate[ateliers][populate][0]=Textepresentation&populate[ateliers][populate][1]=Vignettepersonnage')
const accueil = await repHomepage.json();

export function load({ params }) {
	return {
		ateliers,
		accueil
	};
}
