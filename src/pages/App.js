// React
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './LandingPage/index';
import Portfolio from './Portfolio';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/*' element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
