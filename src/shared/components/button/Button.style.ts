import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../themes/themes';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ButtonPrimary = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.secondary};
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: ${theme.colors.grayTheme.gary100};
`;

export const ActivityIndicatorButton = styled.ActivityIndicator`
margin-left: 8px;
`

