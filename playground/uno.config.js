import { defineConfig, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss';
import config from 'unified-components/uno.config.js';

export default defineConfig({
  presets: [
    config,
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
