import { css } from '@emotion/css';
import React, { useMemo } from 'react';
import { GetForm } from './GetForm';
import { Log } from './Log';
import { UsersStore } from './UsersStore';
import { GetByParamForm } from './GetByParamForm';
import { PostForm } from './PostForm';

export const UsersPage = () => {
  const usersStore = useMemo(() => new UsersStore(), []);

  return (
    <UsersStore.Context.Provider value={usersStore}>
      <div className={baseStyle}>
        <div className={formColumnStyle}>
          <h1>MobX v6.0</h1>
          <GetForm />
          <hr />
          <GetByParamForm />
          <hr />
          <PostForm />
        </div>
        <div className={logColumnStyle}>
          <Log />
        </div>
      </div>
    </UsersStore.Context.Provider>
  );
};

const baseStyle = css({
  display: 'flex',
  height: '100vh',
});

const formColumnStyle = css({
  padding: '0 16px',
  flex: '1 1 100%',
});

const logColumnStyle = css({
  flex: '1.618 1 100%',
});
