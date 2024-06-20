import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "sahithyan/utils",
			customCss: ["./src/tailwind.css"],
			social: {
				github: "https://github.com/sahithyandev/utils",
			},
			sidebar: [
				{
					label: "Getting Started",
					link: "/getting-started",
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
				{
					label: "Reference",
					autogenerate: {
						directory: "reference",
					},
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
