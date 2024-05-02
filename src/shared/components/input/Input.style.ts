import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import { Icons } from '../../icon/icon';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  padding-right: ${(props: ContainerInputProps)=>props.hasSecureTextEntry ? '52px' : '16px'};
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props: ContainerInputProps) =>
    props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icons)`
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const IconSearch = styled(Icons)`
  position: absolute;
  right: 12px;
  top: 10px;
`;
