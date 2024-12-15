import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*", // Origem: todos os arquivos dentro de 'assets'
          dest: "assets",    // Destino no diretório 'dist'
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
