import { Link } from 'react-router-dom';
import React from 'react';
import { Routes } from '../constants/Routes';
import { css } from 'emotion';

export const Navigation = () => (
  <nav className={baseStyle}>
    <h1 className={titleStyle}>App w/ Snowpack</h1>
    <ul className={navigationStyle}>
      <li>
        <Link to={Routes.Paths.Home}>Home</Link>
      </li>
      <li>
        <Link to={Routes.Paths.Catalog}>Catalog</Link>
      </li>
      <li>
        Profile
        <ul>
          <li>
            <Link to={Routes.Paths.ProfileEdit}>Edit</Link>
          </li>
          <li>
            <Link to={Routes.Paths.ProfileShow}>Show</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to={Routes.Paths.List}>List</Link>
      </li>
      <li>
        <Link to={Routes.Paths.Users}>Users</Link>
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
