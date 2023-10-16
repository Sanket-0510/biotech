
import './App.css'
import Home from './components/Home';
import Profile from './components/Profile';
import SavedList from './components/SavedList';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Test from './components/Test';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved-list" element={<SavedList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
