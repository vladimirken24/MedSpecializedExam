import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup'
import Login from './Login';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
