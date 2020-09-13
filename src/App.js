import React , {Component} from 'react';
import './App.css';
import Header from './header/header'
import About from './about/about'
import Info from './info/info'
import Experience from './experience/experience'
import Stats from './stats/stats'
import Footer from './footer/footer'
import End from './endbrand/end'
import Navigator from './navigator/navigator'

class App extends Component 
{
  render()
  {
    return (
      <div className="App">
        <Navigator/>
          <Header />
          <About />
          <Info />
          <Experience />
          <Stats />
          <Footer />
          <End />
      </div>
    );
  }
}

export default App;
