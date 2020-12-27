import { css } from '@emotion/css';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PageTransition } from '../../components/PageTransition';
import { Routes } from '../../constants/Routes';
import { ProfileContainer } from '../../containers/ProfileStore';
import { ProfileEditPage } from './EditPage';
import { ProfileShowPage } from './ShowPage';

export const ProfilePage = () => (
  <div className={baseStyle}>
    <h1>Profile!</h1>
    <ProfileContainer.Provider>
      <PageTransition>
        <Route path={Routes.Paths.ProfileShow} component={ProfileShowPage} />
        <Route path={Routes.Paths.ProfileEdit} component={ProfileEditPage} />
        <Redirect to={Routes.Paths.ProfileShow} />
      </PageTransition>
    </ProfileContainer.Provider>
  </div>
);

const baseStyle = css`
  padding: 16px;
`;
