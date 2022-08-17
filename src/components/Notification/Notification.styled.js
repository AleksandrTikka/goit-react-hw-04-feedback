import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${props => props.theme.colors.accent};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l}px;
  border: 2px dashed ${props => props.theme.colors.text};
`;
