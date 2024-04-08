import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#edf3fc] h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user/sign_in' element={<Form isSignInPage={true} />} />
        <Route path='/user/sign_up' element={<Form isSignInPage={false} />} />
      </Routes>
    </div>
  );
}

export default App;
