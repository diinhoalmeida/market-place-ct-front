import Routes from '../src/setup/routes';
import './styles/main.css';
import GlobalContext from './context/globalcontext';

function App() {

  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  )
}

export default App
