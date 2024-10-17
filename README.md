# Nuxt Unified Confetti
This library integrates the well made [canvas-confetti](https://github.com/catdad/canvas-confetti) library into your application as a layer, this enables seamless usage of Nuxt's auto import features as well as ease of further addition of things like mouse tracking and components.

# Installation
Install the package and extend your app with the layer.

```bash
npm i nuxt-unified-confetti
# or
bun i nuxt-unified-confetti
yarn add nuxt-unified-confetti
```

Then

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  extends: [
    'nuxt-unified-confetti',
  ],
});
```

And you will be able to use these functions

```ts

confettiOnPageSides(duration);
confettiOnCenter(duration);
confettiOnBottom(duration);
confettiOnTop(duration);

confettiCustomParade(duration, config);

```

Or use this function and directly use the canvas-confetti

```ts
confettiCustom(config);
```