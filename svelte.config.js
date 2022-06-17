import * as path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { imagetools } from 'vite-imagetools';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vite: {
		plugins: [ imagetools() ],

		resolve: {
			alias: {
				$img: path.resolve('src/images')
			}
		}
	}
};

export default config;
