import Feedbacks from '../Feedbacks';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Feedbacks
      // initialGood={5} initialNeutral={2} initialBad={1}
      />
    </Container>
  );
};
