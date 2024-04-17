import styled from 'styled-components/native';
import { theme } from '../../themes/themes';

interface ContainerProps{
    margin?: string;
}

export const ProductThumbnailContainer = styled.TouchableOpacity<ContainerProps>`
  height: 190px;
  width: 120px;
  padding: 8px;
  border-radius: 4px;
  border: 1px ${theme.colors.grayTheme.gray80};

  margin: ${(props: ContainerProps)=>props.margin || '0px'}
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 8px;
`

export const ProductInsertCart = styled.TouchableOpacity`
  width: 120px;
  height: 32px;
  position: absolute;
  bottom: 0px;
  left: -1px;
  align-items: center;
  justify-content: center;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  
  background-color: ${theme.colors.mainTheme.secondary};
`