import { TextInputProps, View } from 'react-native';
import { ContainerInput, IconEye } from './Input.style';
import { DisplayFlexCollumn } from '../globalStyles/GlobalView.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';
import { useState } from 'react';
// import { Icons } from '../../icon/icon';

interface InputProps extends TextInputProps {
  margin?:string;
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
}

const Input = ({margin, secureTextEntry, errorMessage, title, ...props }: InputProps) => {
  const [currentSecure, setcurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setcurrentSecure((current) => !current);
  };
  return (
    <DisplayFlexCollumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray80}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={25}
          />
        )}
      </View>
      {errorMessage && (
        <Text
          margin="4px 0px 0px 8px"
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexCollumn>
  );
};

export default Input;
