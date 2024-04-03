import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { ContainerCreateUser } from '../styles/createUser.style';
import { theme } from '../../../shared/themes/themes';

const CreateUser = () => {
  return (
    <ContainerCreateUser>
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Nome Completo:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Telefone:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Email:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="CPF:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Senha:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Confirmar Senha:" />
      <Button
        margin="0px 0px 16px 0px"
        type={theme.buttons.buttonsTheme.primary}
        title="Criar usuário"
      />
    </ContainerCreateUser>
  );
};

export default CreateUser;
