import './App.css'
import Navigation from './components/Navigation.tsx';
import {Route, Routes} from 'react-router-dom';
import PageForm from './components/PageForm.tsx';
import AdminPanel from './components/AdminPanel.tsx';

function App() {

  return (
    <>
      <div>
        <Navigation/>
        <Routes>
          <Route path='/pages/:pageName' element={<PageForm/>}/>
          <Route path='/pages/admin' element={<AdminPanel/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
