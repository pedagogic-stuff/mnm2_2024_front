



export async function load({ params }) {

    let populate = `populate[objets][populate]=*&populate[IllustrationAtelier][populate]=*`
    
    // populate[objets][populate][0]=qcms&populate[objets][populate][1]=POI&populate[objets][populate][2]=visuelObjet2d&populate[IllustrationAtelier][populate]=*

    const url = `https://strapi-vywd-production.up.railway.app/api/ateliers?${populate}`;
    const rep1 =  await fetch(url)
    const ateliers = await rep1.json();

    const artisansURL = `https://strapi-vywd-production.up.railway.app/api/ateliers/${params.id}?populate[objets][populate][0]=qcms&populate[objets][populate][1]=POI&populate[objets][populate][2]=visuelObjet2d&populate[objets][populate][3]=visuelObjet2d_avecHalo&populate[Vignettepersonnage][populate]=*&populate[Textepresentation][populate]=*&populate[illustrationArtisan][populate]=*&populate[illustrationAtelier][populate]=*`;
    const rep2 = await fetch(artisansURL)
    const atelier = await rep2.json();

	return {
		atelier,
        ateliers
	};
}

