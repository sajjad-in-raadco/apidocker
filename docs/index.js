/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import {Rest} from '../src';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    path: '/Get',
    title: 'Method Get',
    content: pageLoader(() => import('./doces/get.md'))
  },
  {
    path: '/Post',
    title: 'Method Post',
    content: pageLoader(() => import('./doces/post.md'))
  },
  {
    path: '/Routes',
    title: 'Routes',
    content: pageLoader(() => import('./doces/routes.md'))
  },
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/sajjad-in-raadco/apidocker"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="Apidocer"
    />
  </div>,
  document.getElementById('catalog')
);
