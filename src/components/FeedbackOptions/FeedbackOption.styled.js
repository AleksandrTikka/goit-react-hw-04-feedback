import styled from '@emotion/styled';

export const List = styled.ul`
  margin-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  text-align: center;
  justify-content: center;
  column-gap: ${p => p.theme.space[5]}px;
`;

export const Btn = styled.button`
  padding: ${p => p.theme.space[2]}px;
`;
