import Feedbacks from '../Feedbacks';
import { Container } from './App.styled';
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <Container>
      <Feedbacks
      // initialGood={5} initialNeutral={2} initialBad={1}
      />
    </Container>
  );
};