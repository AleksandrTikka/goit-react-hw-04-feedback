import Feedbacks from '../Feedbacks';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Feedbacks />
    </Container>
  );
};
