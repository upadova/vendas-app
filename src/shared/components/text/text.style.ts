import styled from "styled-components/native";

interface ContainerTextProps{
    customMargin?: string,
    color?: string,
    fontSize: string,
    fontFamily: 'Poppins-Bold | Poppins-Regular | Poppins-SemiBold | Poppins-Light'
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: ContainerTextProps)=>(props.customMargin ? `margin: ${props.customMargin};`: '')};
    ${(props: ContainerTextProps)=>(props.color ? `color:${props.color};`: '')};
    padding-top: 3px;
    font-size: ${(props: ContainerTextProps)=>(props.fontSize)};
    font-family: ${(props: ContainerTextProps)=>(props.fontFamily)};
`;