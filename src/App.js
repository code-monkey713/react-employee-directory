import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container fluid>
      <Header />
      
      <Footer />
    </Container>
  );
}

export default App;
