
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {Dock, Navbar,Welcome, Home } from "#components";
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Gallery} from "#windows";


gsap.registerPlugin(Draggable);

const App = () =>
{
return (
  <main>
    <Navbar />
    <Welcome /> 
    <Dock /> 

    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
    <Home />  
    <Gallery />
  </main>
);
};
export default App;