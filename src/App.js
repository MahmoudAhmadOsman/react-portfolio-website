import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';
import Events from './components/Events';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div classNamae="container-fluid">
                <NavBar />
          </div>

        <div className="my_intro">
                <Intro />
        </div>
          

      <Skills 
          skill1="HTML5" 
          skill2="CSS3" 
          skill3="PHP"
          skill4="JavaScript"
          skill5="jQuery"
          skill6="Java"
          skill7="and more..."

          >          
      </Skills>


      
     
<Education />




<Events />



        <Footer />

      </div>
    );
  }
}

export default App;
