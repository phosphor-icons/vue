import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: "Vue",
};

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/vue-phosphor-icons.ts"),
      name: "VuePhosphorIcons",
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          preserveModules: true,
          format: 'esm',
          entryFileNames: `[name].mjs`,
          globals
        },
      ],
    },
  },
});
