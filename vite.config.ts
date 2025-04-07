import * as path from "node:path";
import { defineConfig, loadEnv, type UserConfigFn } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

const PROJECT_ROOT = path.resolve(__dirname);
const DEV_MODE = process.env.NODE_ENV === "development";

const config: UserConfigFn = (env) => {
  process.env = { ...process.env, ...loadEnv(env.mode, process.cwd()) };
  return defineConfig({
    server: {
      port: 8080,
      host: true,
    },
    base: "./",
    publicDir: path.join(PROJECT_ROOT, "public"),
    build: {
      outDir: path.join(PROJECT_ROOT, "build"),
      emptyOutDir: true,
    },
    esbuild: {
      legalComments: "none",
    },
    appType: "spa",
    root: "src",
    clearScreen: false,
    plugins: [
      tsconfigPaths(),
      react({
        include: /\.(tsx?)$/,
        babel: {
          plugins: [
            [
              "babel-plugin-styled-components",
              {
                ssr: !DEV_MODE,
                fileName: false,
                displayName: DEV_MODE,
                minify: !DEV_MODE,
                pure: !DEV_MODE,
              },
            ],
          ],
        },
      }),
      VitePWA({
        registerType: "prompt",
        includeAssets: ["favicon.svg", "icon-192x192.png", "icon-512x512.png"],
        manifest: {
          name: "Touchscreen",
          short_name: "Touchscreen",
          description: "Touchscreen kiosk",
          theme_color: "#000000",
          icons: [
            {
              src: "icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  });
};

export default config;
