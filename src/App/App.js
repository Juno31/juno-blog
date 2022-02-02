// React
import { Routes, Route } from 'react-router-dom';

// Components
import Home from '../Routes/Home/Home';
import Awaker from '../Routes/Portfolio/Awaker/Awaker'
import Frontend from '../Routes/Portfolio/Frontend/Frontend'
import Hanyang from '../Routes/Portfolio/Hanyang/Hanyang'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/frontend' element={<Frontend />} />
        <Route path='/portfolio/hanyang' element={<Hanyang />} />
        <Route path='/portfolio/awaker' element={<Awaker />} />
      </Routes>
    </>
  );
}

export default App;
