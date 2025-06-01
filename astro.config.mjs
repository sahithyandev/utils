// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";
import tailwindcss from "@tailwindcss/vite";

/**
 * @type {Parameters<typeof starlight>[0]["head"]}
 */
const STARLIGHT_CONFIG_HEAD = [
	{
		tag: "meta",
		attrs: {
			property: "og:title",
		},
		content: "sahithyan/utils",
	},
];

if (process.env.NODE_ENV === "production") {
	STARLIGHT_CONFIG_HEAD.push({
		tag: "script",
		attrs: {
			defer: true,
			"data-domain": "utils.sahithyan.dev",
			src: "https://analytics.sahithyan.dev/js/script.js",
		},
	});
}

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
			head: STARLIGHT_CONFIG_HEAD,
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
									directory: "ts/common",
								},
							},
							{
								label: "Numerical utils",
								autogenerate: {
									directory: "ts/numerical",
								},
							},
							{
								label: "String utils",
								autogenerate: {
									directory: "ts/string-utils",
								},
							},
							{
								label: "Type utils",
								autogenerate: {
									directory: "ts/type-utils",
								},
							},
						],
					},
					{
						label: "C++",
						link: "/cpp/",
						items: [
							{
								label: "Common",
								autogenerate: {
									directory: "cpp/common",
								},
							},
							{
								label: "Numerical utils",
								autogenerate: {
									directory: "cpp/numerical",
								},
							},
							{
								label: "String utils",
								autogenerate: {
									directory: "cpp/string-utils",
								},
							},
							{
								label: "Type utils",
								autogenerate: {
									directory: "cpp/type-utils",
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
