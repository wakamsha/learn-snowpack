import { css } from '@emotion/css';
import React from 'react';

export const HomePage = () => (
  <div className={baseStyle}>
    <h1>Home Page</h1>
    <p>
      Transpile w/{' '}
      <a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer ">
        <strong>Snowpack</strong>
      </a>
    </p>
  </div>
);

const baseStyle = css({
  padding: 16,
});
