import styled from 'styled-components/native';

interface DisplayProps {
  customMargin?: string;
}

export const DisplayFlexCollumn = styled.View`
  width: 100%;
  flex-direction: column;
  margin: ${(props:DisplayProps)=>props.customMargin ? props.customMargin: '0px'};
`;
