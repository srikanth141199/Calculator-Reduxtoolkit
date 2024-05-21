import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/calStore';
import Display from './components/Display/Display';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  return (
    <div className='App'>
      <Provider store = {store}>
        <h1>Calculator</h1>
        <Display/>
        <Keyboard/>
      </Provider>
    </div>
    
  );
}

export default App;
