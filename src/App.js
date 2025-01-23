import Table from './Components/Table/Table'
// import Table from './Components/Table/Table'
import Home from './Components/Home/Home';
import './App.css';
import Ladder from './Components/Ladder/Ladder';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:handel/:ladder' element={<Table />}> </Route>
        <Route path='/:handel' element={<Ladder />}> </Route>
        <Route path='/' element={<Home />}> </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
