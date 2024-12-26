import type { RegisteredComponent } from '@builder.io/sdk-angular';
import { register } from '@builder.io/sdk-angular';
import { Counter } from './components/counter.component';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: 'Counter',
    inputs: [
      {
        name: 'initialCount',
        type: 'number',
      },
    ],
  },
];

register('editor.settings', {
  customInsertMenu: true,
  designTokensOptional: true,
});

register('insertMenu', {
  name: 'Basisc',
  items: [
    { name: 'Box' },
    { name: 'Text' },
    { name: 'ButtonComponent' },
    { name: 'DividerLineComponent' },
    { name: 'Image' },
    { name: 'Embed' },
    { name: 'Custom Code' },
  ],
});

register('insertMenu', {
  name: 'Headings',
  items: [
    {
      name: 'Display Large',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Display Large',
            visualStyle: 'display-lg',
          },
        },
      },
    },
    {
      name: 'Display Small',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Display Small',
            visualStyle: 'display-sm',
          },
        },
      },
    },
    {
      name: 'Heading 1',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 1',
            level: 'h1',
          },
        },
      },
    },
    {
      name: 'Heading 2',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 2',
            level: 'h2',
          },
        },
      },
    },
    {
      name: 'Heading 3',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 3',
            level: 'h3',
          },
        },
      },
    },
    {
      name: 'Heading 4',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 4',
            level: 'h4',
          },
        },
      },
    },
    {
      name: 'Heading 5',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 5',
            level: 'h5',
          },
        },
      },
    },
    {
      name: 'Heading 6',
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'HeadingComponent',
          options: {
            text: 'Header 6',
            level: 'h6',
          },
        },
      },
    },
  ],
});

register('insertMenu', {
  name: 'Layout',
  items: [
    { name: 'ContainerComponent' },
    { name: 'Core:Section' },
    { name: 'Columns' },
    // todo: Add Canvas here once I know how
  ],
});

register('insertMenu', {
  name: 'Media',
  items: [{ name: 'Video' }],
});

register('insertMenu', {
  name: 'Navigation',
  items: [{ name: 'SitemapComponent' }],
});
