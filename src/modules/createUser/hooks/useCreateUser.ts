import { useEffect, useState } from 'react';
import { createUserTypes } from '../../../shared/types/createUserTypes';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { USER_URL } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../enums/menuUrl';

export const useCreateUser = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { request, loading } = useRequest();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const [createUser, setCreateUser] = useState<createUserTypes>({
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (
      createUser.name !== '' &&
      createUser.cpf !== '' &&
      createUser.email !== '' &&
      createUser.phone !== '' &&
      createUser.password !== '' &&
      createUser.password === createUser.confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: USER_URL,
      method: MethodEnum.POST,
      body: createUser,
      message: 'Usuário cadastrado com sucesso.',
    });
    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }],
      });
    }
  };

  const handleOnChnageInput = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
    setCreateUser((currentUser) => ({
      ...currentUser,
      [name]: e.nativeEvent.text,
    }));
  };

  return {
    createUser,
    loading,
    disabled,
    handleOnChnageInput,
    handleCreateUser,
  };
};
