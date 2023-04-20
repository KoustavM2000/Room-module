import React from 'react';
import ViewRoom from './pages/ViewRoom';
import SearchRoom from './pages/SearchRoom';
import UpdateRoom from './pages/UpdateRoom';
import ShiftRoom from './pages/ShiftRoom';
import AddRoom from './pages/AddRoom';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import {useState} from 'react';

const App = () => {
  const [id, setId] = useState(null);
   

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ViewRoom setId={setId} id={id} />}></Route>
          <Route path="/AddRoom" exact element={<AddRoom/>}></Route>
          <Route path="/UpdateRoom" exact element={<UpdateRoom setId={setId} id={id} />}></Route>
          <Route path="/SearchRoom" exact element={<SearchRoom/>}></Route>
          <Route path="/ShiftRoom" exact element={<ShiftRoom/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App