import styled from 'styled-components';

type Props = {
  isNumber?: number,
  color?: string
}

export const Title = styled.h1<Props>`
  font-weight: bolder;
  font-size: ${({isNumber}) => isNumber ? '10em' : '4em' };
  padding-bottom: 40px;
  color: ${({color}) => color ? color : '#000'}
`;

export const Subtitle = styled.h1`
  font-size: 2em;
  padding-top: 60px;
`;
