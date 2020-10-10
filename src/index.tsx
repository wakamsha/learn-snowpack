import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { injectGlobal } from 'emotion';
import { configure } from 'mobx';

injectGlobal({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: 'sans-serif',
    lineHeight: 1.15,
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    msOverflowStyle: 'scrollbar',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    overflowX: 'hidden',
  },

  // Scaffolding
  'html, body': {
    margin: 0,
    padding: 0,
    fontWeight: 500,
    fontFeatureSettings: `'palt' 1`,
  },
});

configure({
  enforceActions: 'always',
});

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app'),
);
