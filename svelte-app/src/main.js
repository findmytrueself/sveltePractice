import './global.css';

import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'MERRY CHRISTMAS',
  },
});

export default app;
