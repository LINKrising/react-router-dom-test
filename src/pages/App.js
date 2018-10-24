import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Topics from './topics/Topics';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar/>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;