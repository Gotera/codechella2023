import Header from './components/Header';
import HighLightCard from './components/HighLightCard';
import './App.scss'
import LineUp from 'components/LineUp';
import Footer from 'components/Footer';
import FterTypeOne from 'components/Backgrounds/Footer/TypeOne';

function App() {
  return (
    <div className="App">
      <Header />
      <HighLightCard />
      <LineUp />
      <FterTypeOne />
      <Footer />
    </div>
  );
}

export default App;
