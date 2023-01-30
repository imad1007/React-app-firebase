import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homme from './components/Homme'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homme/>}/>

    </Routes>
  );
}

export default App;
