import React, { useState } from 'react';
import { Alert, ModalProps as ModalPropsReact, Modal as ModalReact, View } from 'react-native';
import { ContainerModal, IconCloseMoadal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalsProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalsProps) => {
  return (
    <View>
      <ModalReact
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        {...props}
      >
        <ContainerModal>
        <IconCloseMoadal size={15} onPress={onCloseModal} name="cross" />
          <Text
            color={theme.colors.mainTheme.primary}
            type={textTypes.SUB_TITLE_SEMI_BOLD}
          >
            {title}
          </Text>
          <Text>{text}</Text>
          <Button title='OK'  onPress={onCloseModal} />
        </ContainerModal>
      </ModalReact>
    </View>
  );
};

export default Modal;
