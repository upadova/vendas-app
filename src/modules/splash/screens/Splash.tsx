import { useEffect } from 'react';
import { ContainerSplash, ImageLogoSplash } from '../styles/splash.style';
import { useRequest } from '../../../shared/hooks/useRequest';
import { USER_URL } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { useUserReducer } from '../../../store/reducers/useReducer/useUserReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../enums/menuUrl';

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();
  useEffect(() => {
    const verifyLogin = async () => {
      const returnUser = await request({
        url: USER_URL,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });
      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };
    verifyLogin();
  }, []);
  
  return (
    <ContainerSplash>
      <ImageLogoSplash resizeMode="contain" source={require('../../../assets/images/logo.png')} />
    </ContainerSplash>
  );
};

export default Splash;
