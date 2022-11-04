import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bbe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5a2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'aca'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'afa'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '32e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '528'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '3d9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9cb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '282'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '666'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '612'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '59c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '357'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '716'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b45'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '940'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7d8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
