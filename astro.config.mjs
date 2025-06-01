// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "sahithyan/utils",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
				},
			],
			components: {
				Hero: "./src/components/Head.astro",
			},
			customCss: ["./src/styles/global.css"],
			plugins: [
				starlightSidebarTopicsPlugin([
					{
						label: "TypeScript",
						link: "/ts/",
						items: [
							{
								label: "Common",
								autogenerate: {
									directory: "common",
								},
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
							{
								label: "Type utils",
								autogenerate: {
									directory: "type-utils",
								},
							},
						],
					},
				]),
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
