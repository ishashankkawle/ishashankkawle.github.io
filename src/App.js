import React, { Component, Suspense } from 'react';
import './App.css';
import loader from './assets/preloader.gif';
const Navigator = React.lazy(() => import('./navigator/navigator'));
const Header = React.lazy(() => import('./header/header'));
const About = React.lazy(() => import('./about/about'));
const Info = React.lazy(() => import('./info/info'));
const Experience = React.lazy(() => import('./experience/experience'));
const Stats = React.lazy(() => import('./stats/stats'));
const Projects = React.lazy(() => import('./projects/projects'));
const Footer = React.lazy(() => import('./footer/footer'));
const End = React.lazy(() => import('./endbrand/end'));


class App extends Component 
{

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<img src={loader} alt="Loading ..." onLoad={() => this.sleep(2000)} />}>
          <Navigator />
          <Header />
          <About />
          <Info />
          <Experience />
          <Stats />
          <Projects/>
          <Footer />
          <End />
        </Suspense>
      </div>
    );
  }
}

export default App;
