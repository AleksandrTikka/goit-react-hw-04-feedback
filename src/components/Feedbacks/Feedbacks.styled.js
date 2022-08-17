import styled from '@emotion/styled';

export const Box = styled.div`
  padding: ${p => p.theme.space[5]}px;
  text-align: center;
  width: 500px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.md};

  background: ${props => props.theme.colors.bgFeedback};
  color: ${props => props.theme.colors.text};
`;
