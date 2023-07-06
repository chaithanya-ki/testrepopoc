import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const testplugin223Plugin = createPlugin({
  id: 'testplugin223',
  routes: {
    root: rootRouteRef,
  },
});

export const Testplugin223Page = testplugin223Plugin.provide(
  createRoutableExtension({
    name: 'Testplugin223Page',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
