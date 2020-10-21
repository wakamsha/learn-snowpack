import React from 'react';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from './constants/Routes';
import { HomePage } from './pages/HomePage';
import { ListPage } from './pages/ListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { css } from 'emotion';
import { ProfilePage } from './pages/profile';
import { UsersPage } from './pages/UserPage';
import { PageTransition } from './components/PageTransition';
import { CatalogPage } from './pages/CatalogPage';

export const App = () => (
  <BrowserRouter>
    <div className={baseStyle}>
      <Navigation />
      <div className={contentStyle}>
        <PageTransition>
          <Route path={Routes.Paths.Home} component={HomePage} exact />
          <Route path={Routes.Paths.Catalog} component={CatalogPage} />
          <Route path={Routes.Paths.Profile} component={ProfilePage} />
          <Route path={Routes.Paths.List} component={ListPage} />
          <Route path={Routes.Paths.Users} component={UsersPage} />
          <Route component={NotFoundPage} />
        </PageTransition>
      </div>
    </div>
  </BrowserRouter>
);

const baseStyle = css({
  display: 'flex',
  width: '100%',
});

const contentStyle = css({
  padding: 0,
  height: '100vh',
  flexGrow: 1,
});
