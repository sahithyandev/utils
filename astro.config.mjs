// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";

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
			description: "A collection of copy-pastable utilities.",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/sahithyandev/utils",
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
							{
								label: "React Hooks",
								autogenerate: {
									directory: "ts/react-hooks",
								},
							},
						],
					},
					{
						label: "C++",
						link: "/cpp/",
						items: [
							{
								label: "Input",
								autogenerate: {
									directory: "cpp/input",
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
								label: "Vector utils",
								autogenerate: {
									directory: "cpp/vector-utils",
								},
							},
							{
								label: "Other",
								autogenerate: {
									directory: "cpp/other",
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
