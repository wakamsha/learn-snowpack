import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { configure } from 'mobx';
import { applyGlobalStyle } from './helpers/Style';

applyGlobalStyle();

configure({
  enforceActions: 'always',
});

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app'),
);
