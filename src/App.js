import logo from './logo.svg';
import './App.css';
import {NavBar} from './Pages/NavigationBar'
import {Home} from './Pages/Home'
import {Skills} from './Pages/Skills';
import {Contact} from './Pages/Contact';
import {Projects} from './Pages/Projects';
import { Experience } from './Pages/Experience';
import { Cover } from './Pages/Cover';
import 'bootstrap/dist/css/bootstrap.min.css'
import {gsap,Power3} from 'gsap';

function App() {

let tl=new gsap.timeline();
let ease=Power3.easeOut();




  return (
    <div className="App">
<NavBar   />
<Cover/>
<Home timeline={tl} ease={ease}/>
<Skills />
<Experience/>

<Projects />
<Contact/>
    </div>
  );
}

export default App;
/*<Skills  />*/