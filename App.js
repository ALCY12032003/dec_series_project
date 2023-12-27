import {BrowserRouter,Routes,Route} from "react-router-dom";
import Front from './Front';
import Delete from './Delete';
import View from './View';
import Add from './Add';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
          <Route path='' element ={<Front/>}></Route>
          <Route path='Delete' element ={<Delete/>}></Route>
          <Route path='View' element ={<View/>}></Route>
          <Route path='Add' element ={<Add/>}></Route>
          <Route path='Edit' element ={<Edit/>}></Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
