import { useSelector } from 'react-redux';
import './App.css';
import Kletka from './components/kletka';

function App() {
  const bgColor = useSelector(state => state.sudoku.color)
  return (
    <div className={bgColor}>
      <h1>Судоку</h1>
      <Kletka/>
    </div>
  );
}

export default App;
