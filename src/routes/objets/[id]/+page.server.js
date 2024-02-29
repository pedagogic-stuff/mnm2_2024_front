


export async function load({ params }) {

    const url1 = `https://artisans.stagingserver.fr/api/objet3-ds`;
    const rep1 =  await fetch(url1)
    const objets = await rep1.json();

    let populate = `populate[CarteZone][populate]=*&populate[qcms][populate]=*&populate[POI][populate]=*&populate[fichier3d][populate]=*`
    const url = `https://artisans.stagingserver.fr/api/objet3-ds/${params.id}?${populate}`;

    const reponse =  await fetch(url)
    const objet = await reponse.json();

	return {
		objet,
        objets
	};
}
