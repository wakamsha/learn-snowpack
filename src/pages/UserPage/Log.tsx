import { css } from 'emotion';
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
    margin: 0,
    padding: 16,
    overflow: 'auto',
    color: '#d1edff',
    '> code': {
      lineHeight: 1.3,
      fontFamily: 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace',
      fontSize: '0.65rem',
    },
  },
});
