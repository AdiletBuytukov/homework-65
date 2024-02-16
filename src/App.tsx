import './App.css'
import Navigation from './components/Navigation.tsx';
import {Route, Routes} from 'react-router-dom';
import PageForm from './components/PageForm.tsx';

function App() {

  return (
    <>
      <div>
        <Navigation/>
        <Routes>
          <Route path='/pages/:pageName' element={<PageForm/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
