import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { ContainerCreateUser } from '../styles/createUser.style';
import { theme } from '../../../shared/themes/themes';
import { useCreateUser } from '../hooks/useCreateUser';
import { useRef } from 'react';
import { TextInput } from 'react-native';

const CreateUser = () => {
  const { createUser, loading, disabled, handleOnChnageInput, handleCreateUser } = useCreateUser();
  const phoneInput = useRef<TextInput>(null);
  const emailInput = useRef<TextInput>(null);
  const cpfInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const cofirmPasswordInput = useRef<TextInput>(null);

  return (
    <ContainerCreateUser>
      <Input
        value={createUser.name}
        onChange={(e) => handleOnChnageInput(e, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome Completo:"
        onSubmitEditing={() => phoneInput?.current?.focus()}
      />
      <Input
        value={createUser.phone}
        onChange={(e) => handleOnChnageInput(e, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone:"
        type="cel-phone"
        keyboardType='number-pad'
        ref={phoneInput}
        onSubmitEditing={() => emailInput?.current?.focus()}
      />
      <Input
        value={createUser.email}
        onChange={(e) => handleOnChnageInput(e, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
        keyboardType='email-address'
        ref={emailInput}
        onSubmitEditing={() => cpfInput?.current?.focus()}
      />
      <Input
        value={createUser.cpf}
        onChange={(e) => handleOnChnageInput(e, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF:"
        type="cpf"
        keyboardType='number-pad'
        ref={cpfInput}
        onSubmitEditing={() => passwordInput?.current?.focus()}
      />
      <Input
        value={createUser.password}
        onChange={(e) => handleOnChnageInput(e, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
        secureTextEntry
        ref={passwordInput}
        onSubmitEditing={() => cofirmPasswordInput?.current?.focus()}
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(e) => handleOnChnageInput(e, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar Senha:"
        secureTextEntry
        ref={cofirmPasswordInput}
      />
      <Button
        disabled={disabled}
        margin="0px 0px 16px 0px"
        type={theme.buttons.buttonsTheme.primary}
        title="Criar usuário"
        loading={loading}
        onPress={handleCreateUser}
      />
    </ContainerCreateUser>
  );
};

export default CreateUser;
