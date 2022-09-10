import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NewProfile from './pages/NewProfile';
import Signin from './pages/signin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Signin />} />
        <Route path="/profile" element={<NewProfile />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
