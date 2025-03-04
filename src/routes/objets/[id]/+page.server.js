


export async function load({ params }) {

    const url1 = `https://strapi-vywd-production.up.railway.app/api/objets`;
    const rep1 =  await fetch(url1)
    const objets = await rep1.json();

    let populate = `populate[CarteZone]=*&populate[qcms][populate]=*&populate[POI][populate]=*&populate[Fichier3d]=*`
    const url = `https://strapi-vywd-production.up.railway.app/api/objets/${params.id}?${populate}`;
console.log(url)
    const reponse =  await fetch(url)
    const objet = await reponse.json();

	return {
		objet,
        objets
	};
}
