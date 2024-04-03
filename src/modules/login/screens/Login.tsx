import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/themes';
import { useLogin } from '../hooks/useLogin';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { textTypes } from '../../../shared/components/text/textTypes';

const Login = () => {
  const {
    email,
    password,
    errorMessage,
    loading,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleGoToCreateUser
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
        <TouchableOpacity onPress={handleGoToCreateUser}>
          <Text margin="16px" type={textTypes.PARAGRAPH_SEMI_BOLD} color={theme.colors.mainTheme.primary}>
            Cadastrar usuário
          </Text>
        </TouchableOpacity>
        <Button
          type={theme.buttons.buttonsTheme.primary}
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
