import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./test/setup.ts"],
        server: {
            deps: {
                inline: [/@solidjs\/router/],
            },
        },
        projects: [
            {
                plugins: [solid()],
                test: {
                    include: ["**/*.test.{ts,tsx,jsx}"],
                    exclude: ["**/node_modules/**"],
                    environment: "jsdom",
                    setupFiles: ["./test/setup.ts"],
                    server: {
                        deps: {
                            inline: [/@solidjs\/router/],
                        },
                    },
                },
            },
        ],
    },
});
