import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/calStore';
import Display from './components/Display/Display';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  return (
    <Provider store = {store}>
      <h1>Calculator</h1>
      <Display/>
      <Keyboard/>
    </Provider>
  );
}

export default App;
