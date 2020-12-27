import { css } from '@emotion/css';
import { observer } from 'mobx-react';
import React from 'react';
import { useContext } from '../../hooks/useContext';
import { UsersStore } from './UsersStore';

export const Log = observer(() => {
  const store = useContext(UsersStore.Context);

  return (
    <figure className={baseStyle}>
      <pre>
        <code>{JSON.stringify({ ...store.users }, null, 2)}</code>
      </pre>
    </figure>
  );
});

const baseStyle = css({
  margin: 0,
  background: '#0f192a',
  height: '100%',
  '> pre': {
    height: '100%',
    padding: 16,
    margin: 0,
    overflow: 'auto',
    color: '#d1edff',
    '> code': {
      fontFamily: 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace',
      fontSize: '0.65rem',
      lineHeight: 1.3,
    },
  },
});
