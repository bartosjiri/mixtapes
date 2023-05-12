import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./config']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/styles/_styles.scss" as *;'
			}
		}
	}
});
