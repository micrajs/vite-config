export namespace vite {
    namespace build {
        const outDir: string;
        namespace lib {
            const entry: string;
            const formats: string[];
            function fileName(format: any): string;
        }
        namespace rollupOptions {
            namespace output {
                const assetFileNames: string;
                const preserveModules: boolean;
            }
        }
    }
    namespace resolve {
        const alias: {
            '@': string;
        };
    }
}
