


const f = await fetch('https://artisans.stagingserver.fr/api/credit')
const credits = await f.json();

export function load() {
	return {
		credits
	};
}
