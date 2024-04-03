import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { ContainerCreateUser } from '../styles/createUser.style';
import { theme } from '../../../shared/themes/themes';
import { useCreateUser } from '../hooks/useCreateUser';

const CreateUser = () => {
  const { createUser, loading, handleOnChnageInput, handleCreateUser } = useCreateUser();
  return (
    <ContainerCreateUser>
      <Input
        value={createUser.name}
        onChange={(e) => handleOnChnageInput(e, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome Completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(e) => handleOnChnageInput(e, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(e) => handleOnChnageInput(e, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={(e) => handleOnChnageInput(e, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(e) => handleOnChnageInput(e, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(e) => handleOnChnageInput(e, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar Senha:"
      />
      <Button
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
