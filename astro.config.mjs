import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "My Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
				},
			],
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
});
