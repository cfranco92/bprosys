interface PostCSSConfig {
  plugins: string[] | Record<string, unknown>[];
}

const config: PostCSSConfig = {
  plugins: ["@tailwindcss/postcss"],
};

export default config; 