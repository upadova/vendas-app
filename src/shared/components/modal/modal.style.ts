import styled from 'styled-components/native';
import { theme } from '../../themes/themes';
import { Icons } from '../../icon/icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.white};
  height: 200px;
  width: 100%;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
  z-index: 9;

  shadow-color: ${theme.colors.neutralTheme.black};
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 1;
  shadow-radius: 1px;
  elevation: 10;
`;

export const IconCloseMoadal = styled(Icons)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
