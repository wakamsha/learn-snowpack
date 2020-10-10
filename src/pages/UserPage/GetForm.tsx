import { Observer } from 'mobx-react';
import React from 'react';
import { useContext } from '../../hooks/useContext';
import { useTransaction } from '../../hooks/useTransaction';
import { UsersStore } from './UsersStore';

export const GetForm = () => {
  const store = useContext(UsersStore.Context);

  const { onSubmit, submitRunning } = useSubmit(store);

  return (
    <>
      <h3>GET</h3>

      <p>
        <button onClick={() => onSubmit()} disabled={submitRunning}>
          GET
        </button>
      </p>

      <Observer>{() => <p>{store.numOfUser}</p>}</Observer>
    </>
  );
};

function useSubmit(store: UsersStore) {
  const [onSubmit, submitStatus] = useTransaction(
    async () => {
      await store.getAllUsers();
    },
    e => console.error('😓😓😓', e.message),
  );

  return { onSubmit, submitRunning: !!submitStatus.running };
}
