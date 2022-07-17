import './App.css';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { Blog } from './Components/Blog';
import {Routes,Route} from "react-router";
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blogs" element={<Blog/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
