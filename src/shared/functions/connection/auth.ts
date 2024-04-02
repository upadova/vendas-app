import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';

export const unsetAuthorizationToken = () => {
  removeItemStorage(AUTHORIZATION_KEY);
};

export const setAuthorizationToken = async (token: string) => {
  await setItemStorage(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = async () => {
  return await getItemStorage(AUTHORIZATION_KEY);
};
