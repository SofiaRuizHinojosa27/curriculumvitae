import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Social from '../components/Social';

const App = () => {
    return(
        <Main>
            <Sidebar>
                <About/>
                <Social/>
            </Sidebar>
            <Info>
                <Education/>
                <Experience/>
                <Certificates/>
                <Skills/>
            </Info>
        </Main>

    )
}

export default App;