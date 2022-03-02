import Entry from './Entry.svelte';

const main = new Entry({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default main;