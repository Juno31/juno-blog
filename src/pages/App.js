// React
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './LandingPage/index';
import Post from './Post';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/*' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
