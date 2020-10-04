import { ProfileEditPage } from './EditPage';
import { ProfileShowPage } from './ShowPage';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { ProfileContainer } from '../../containers/ProfileStore';
import { Router } from '../../constants/Router';
import { PageTransition } from '../../components/PageTransition';

export const ProfilePage = () => (
  <>
    <h1>Profile!</h1>
    <ProfileContainer.Provider>
      <PageTransition>
        <Route path={Router.paths.profileShow} component={ProfileShowPage} />
        <Route path={Router.paths.profileEdit} component={ProfileEditPage} />
        <Redirect to={Router.paths.profileShow} />
      </PageTransition>
    </ProfileContainer.Provider>
  </>
);
