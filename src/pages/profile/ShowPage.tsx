import React from 'react';
import { ProfileContainer } from '../../containers/ProfileStore';

export const ProfileShowPage = () => {
  const { name, setName } = ProfileContainer.useContainer();

  const handleReset = () => setName('');

  return (
    <>
      <h2>Show Page</h2>
      <p>name: {name}</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
