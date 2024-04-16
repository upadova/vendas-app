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