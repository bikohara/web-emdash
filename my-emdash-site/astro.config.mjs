import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { cloudflareD1, cloudflareR2 } from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: cloudflareD1({
				binding: "DB"
			}),
			storage: cloudflareR2({
				binding: "MEDIA",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Playfair Display",
			cssVariable: "--font-heading",
			weights:,
			fallbacks: ["serif"],
		},
	],
	devToolbar: { enabled: false },
});
