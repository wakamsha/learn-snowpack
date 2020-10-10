import { useTransaction } from '../../hooks/useTransaction';
import { UsersStore } from './UsersStore';
import { Observer } from 'mobx-react';
import React, { ChangeEvent, useState } from 'react';
import { useContext } from '../../hooks/useContext';

export const GetByParamForm = () => {
  const store = useContext(UsersStore.Context);

  const { onSubmit, submitRunning } = useSubmit();

  const [userId, setUserId] = useState(store.userId);

  const handleChangeId = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setUserId(Number(value));

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h3>Get by Params</h3>
      <p>取得する User の id を指定</p>
      <input type="number" max={100} disabled={submitRunning} onChange={handleChangeId} />
      <p>
        ID: <Observer>{() => <code>{store.userId}</code>}</Observer>
      </p>
      <button onClick={() => onSubmit(userId)} disabled={submitRunning}>
        GET
      </button>
    </form>
  );
};

function useSubmit() {
  const store = useContext(UsersStore.Context);

  const [onSubmit, submitStatus] = useTransaction(
    async (userId: number) => {
      store.setUserId(userId);
      await store.getUser();
    },
    e => console.error('😓😓😓', e.message),
  );

  return { onSubmit, submitRunning: !!submitStatus.running };
}
