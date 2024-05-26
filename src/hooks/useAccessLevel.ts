import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from 'src/stores/sagaStore/slices/user';

export const useAccessLevel = () => {
  const profile = useSelector(getProfile);

  if (profile && (profile.email === 'skiper94@ya.ru' || profile.email.startsWith('admin'))) return 777;
  else if (profile) return 1;
  else return -1;
};
