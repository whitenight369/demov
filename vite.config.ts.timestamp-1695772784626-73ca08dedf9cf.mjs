// vite.config.ts
import { defineConfig } from "file:///C:/Users/e%E5%85%88%E7%94%9F/Desktop/my-app/node_modules/.pnpm/vite@4.4.5_less@4.2.0_sass@1.68.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/e%E5%85%88%E7%94%9F/Desktop/my-app/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///C:/Users/e%E5%85%88%E7%94%9F/Desktop/my-app/node_modules/.pnpm/rollup-plugin-visualizer@5.9.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), visualizer({
    // 打包完成后自动打开浏览器，显示产物体积报告
    open: true
  })],
  build: {
    // 类型: boolean | 'esbuild' | 'terser'
    // 默认为 `esbuild`
    minify: "esbuild",
    // 产物目标环境
    target: "modules",
    // 如果 minify 为 terser，可以通过下面的参数配置具体行为
    // https://terser.org/docs/api-reference#minify-options
    terserOptions: {}
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxlXHU1MTQ4XHU3NTFGXFxcXERlc2t0b3BcXFxcbXktYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxlXHU1MTQ4XHU3NTFGXFxcXERlc2t0b3BcXFxcbXktYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9lJUU1JTg1JTg4JUU3JTk0JTlGL0Rlc2t0b3AvbXktYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdmlzdWFsaXplcih7XG4gICAgLy8gXHU2MjUzXHU1MzA1XHU1QjhDXHU2MjEwXHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XHVGRjBDXHU2NjNFXHU3OTNBXHU0RUE3XHU3MjY5XHU0RjUzXHU3OUVGXHU2MkE1XHU1NDRBXG4gICAgb3BlbjogdHJ1ZSxcbiAgfSksXSxcbiAgYnVpbGQ6e1xuICAgICAvLyBcdTdDN0JcdTU3OEI6IGJvb2xlYW4gfCAnZXNidWlsZCcgfCAndGVyc2VyJ1xuICAgIC8vIFx1OUVEOFx1OEJBNFx1NEUzQSBgZXNidWlsZGBcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICAvLyBcdTRFQTdcdTcyNjlcdTc2RUVcdTY4MDdcdTczQUZcdTU4ODNcbiAgICB0YXJnZXQ6ICdtb2R1bGVzJyxcbiAgICAvLyBcdTU5ODJcdTY3OUMgbWluaWZ5IFx1NEUzQSB0ZXJzZXJcdUZGMENcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdcdTRFMEJcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdTkxNERcdTdGNkVcdTUxNzdcdTRGNTNcdTg4NENcdTRFM0FcbiAgICAvLyBodHRwczovL3RlcnNlci5vcmcvZG9jcy9hcGktcmVmZXJlbmNlI21pbmlmeS1vcHRpb25zXG4gICAgdGVyc2VyT3B0aW9uczoge31cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlIsU0FBUyxvQkFBb0I7QUFDMVQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBRzNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVztBQUFBO0FBQUEsSUFFNUIsTUFBTTtBQUFBLEVBQ1IsQ0FBQyxDQUFFO0FBQUEsRUFDSCxPQUFNO0FBQUE7QUFBQTtBQUFBLElBR0osUUFBUTtBQUFBO0FBQUEsSUFFUixRQUFRO0FBQUE7QUFBQTtBQUFBLElBR1IsZUFBZSxDQUFDO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
