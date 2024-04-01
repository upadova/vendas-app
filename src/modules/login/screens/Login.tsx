import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/themes';
import { useLogin } from '../hooks/useLogin';
import { SafeAreaView } from 'react-native';

const Login = () => {
  const {
    email,
    password,
    errorMessage,
    loading,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <SafeAreaView>
      <ContainerLogin>
        <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')} />
        <Input
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          placeholder="Digite seu email."
          title="Email:"
          value={email}
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite sua senha."
          title="Senha:"
          value={password}
          onChange={handleOnChangePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          onPress={handleOnPress}
          loading={loading}
          disabled={loading}
        />
      </ContainerLogin>
    </SafeAreaView>
  );
};

export default Login;
