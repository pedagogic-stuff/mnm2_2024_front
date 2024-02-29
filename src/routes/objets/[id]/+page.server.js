


export async function load({ params }) {

    let populate = `populate[CarteZone][populate]=*&populate[qcms][populate]=*&populate[POI][populate]=*&populate[fichier3d][populate]=*`
    const url = `https://artisans.stagingserver.fr/api/objet3-ds/${params.id}?${populate}`;

    const reponse =  await fetch(url)
    const objet = await reponse.json();

	return {
		objet
	};
}
