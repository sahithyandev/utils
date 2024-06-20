import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "sahithyan/utils",
			customCss: ["./src/global.css"],
			social: {
				github: "https://github.com/sahithyandev/utils",
			},
			tableOfContents: false,
			sidebar: [
				{
					label: "Getting Started",
					link: "/getting-started",
				},
				{
					label: "Numerical utils",
					autogenerate: {
						directory: "numerical",
					},
				},
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Example Guide",
							link: "/guides/example/",
						},
					],
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
