import { useState } from 'react';
import { createContainer } from '../utils/Unstated';

const useProfile = () => {
  const [name, setName] = useState('');

  return { name, setName };
};

export const ProfileContainer = createContainer(useProfile);
