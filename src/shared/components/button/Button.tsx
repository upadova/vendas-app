import { TouchableOpacityProps } from 'react-native';
import {
  ButtonContainer,
  ButtonSecondary,
  GradientButton,
  ButtonPrimary,
  ButtonDisabled,
  ActivityIndicatorButton,
} from './Button.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, loading, disabled, onPress, margin, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  const renderText = (color: string) => {
    return (
      <>
        <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
          {title}
        </Text>
        {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white} />}
      </>
    );
  };

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.secondary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
    default:
      return (
        <ButtonPrimary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.secondary)}
        </ButtonPrimary>
      );
  }
};

export default Button;
