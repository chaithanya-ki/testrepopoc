import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { testplugin223Plugin, Testplugin223Page } from '../src/plugin';

createDevApp()
  .registerPlugin(testplugin223Plugin)
  .addPage({
    element: <Testplugin223Page />,
    title: 'Root Page',
    path: '/testplugin223'
  })
  .render();
