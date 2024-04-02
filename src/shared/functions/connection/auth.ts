import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { MenuUrl } from '../../../enums/menuUrl';

export const unsetAuthorizationToken = () => {
  removeItemStorage(AUTHORIZATION_KEY);
};

export const setAuthorizationToken = async (token: string) => {
  await setItemStorage(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = async () => {
  return await getItemStorage(AUTHORIZATION_KEY);
};

export const logout = (navigate: NavigationProp<ParamListBase>)=>{
    unsetAuthorizationToken();
    navigate.reset({
        index: 0,
        routes:[{ name: MenuUrl.LOGIN }]
    })
}
