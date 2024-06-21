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
			components: {
				Hero: "./src/components/Hero.astro",
			},
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
					label: "String utils",
					autogenerate: {
						directory: "string-utils",
					},
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
