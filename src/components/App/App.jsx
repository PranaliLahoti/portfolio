import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Certifications from '../Certifications/Certifications'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
import Achievments from '../Achievments/Achievments';


const App =()=>{
    return(
        <div>
            <HashRouter>
                <div>
                    <NavBar/>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/experience' exact component={WorkExperience} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/skills' exact component={Skills} />
                    <Route path='/certifications' exact component={Certifications} />
                    <Route path='/achievements' exact component={Achievments} />
                    <Route path='/contact' exact component={Contact} />
                    <GoHome/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App