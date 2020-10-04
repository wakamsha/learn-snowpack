import { Link } from 'react-router-dom';
import React from 'react';
import { Router } from '../constants/Router';
import { css } from 'emotion';

export const Navigation = () => (
  <nav className={baseStyle}>
    <h1 className={titleStyle}>Unstated Basic</h1>
    <ul className={navigationStyle}>
      <li>
        <Link to={Router.paths.home}>Home</Link>
      </li>
      <li>
        Profile
        <ul>
          <li>
            <Link to={Router.paths.profileEdit}>Edit</Link>
          </li>
          <li>
            <Link to={Router.paths.profileShow}>Show</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to={Router.paths.list}>List</Link>
      </li>
    </ul>
  </nav>
);

const baseStyle = css({
  padding: 16,
  height: '100vh',
  borderLeft: '1px solid gray',
  background: 'silver',
  flexShrink: 0,
});

const titleStyle = css({
  margin: `0 0 16px`,
  paddingBottom: 16,
  borderBottom: `1px solid gray`,
  fontSize: 18,
});

const navigationStyle = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,

  li: {
    marginBottom: 8,
  },
});
