import { r as render } from './chunks/prerender_b1964b59.mjs';

function check(Component) {
	// Svelte 5 generated components always accept these two props
	const str = Component.toString();
	return str.includes('$$payload') && str.includes('$$props');
}

function needsHydration(metadata) {
	// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
	return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}

async function renderToStaticMarkup(Component, props, slotted, metadata) {
	const tagName = needsHydration(metadata) ? 'astro-slot' : 'astro-static-slot';

	let children = undefined;
	let $$slots = undefined;
	for (const [key, value] of Object.entries(slotted)) {
		if (key === 'default') {
			children = () => `<${tagName}>${value}</${tagName}>`;
		} else {
			$$slots ??= {};
			$$slots[key] = () => `<${tagName} name="${key}">${value}</${tagName}>`;
		}
	}

	const { html } = render(Component, {
		props: {
			...props,
			children,
			$$slots,
		},
	});
	return { html };
}

const _renderer0 = {
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client-v5.js","serverEntrypoint":"@astrojs/svelte/server-v5.js"}, { ssr: _renderer0 }),];

export { renderers };
