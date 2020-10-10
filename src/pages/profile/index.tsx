import { ProfileEditPage } from './EditPage';
import { ProfileShowPage } from './ShowPage';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { ProfileContainer } from '../../containers/ProfileStore';
import { Routes } from '../../constants/Routes';
import { PageTransition } from '../../components/PageTransition';
import { css } from 'emotion';

export const ProfilePage = () => (
  <div className={baseStyle}>
    <h1>Profile!</h1>
    <ProfileContainer.Provider>
      <PageTransition>
        <Route path={Routes.paths.profileShow} component={ProfileShowPage} />
        <Route path={Routes.paths.profileEdit} component={ProfileEditPage} />
        <Redirect to={Routes.paths.profileShow} />
      </PageTransition>
    </ProfileContainer.Provider>
  </div>
);

const baseStyle = css({
  padding: 16,
});
