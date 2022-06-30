import Topbar from './Topbar';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Book from './Book';
import Cart from './Cart';
import Rentals from './Rentals';
import Repairs from './Repairs';
import Shop from './Shop';
import Terms from './Terms';
import Support from './Support'
import Bottombar from './Bottombar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/semitone-react-site">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Book">
              <Book />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Rentals">
              <Rentals />
            </Route>
            <Route path="/Repairs">
              <Repairs />
            </Route>
            <Route path="/Shop">
              <Shop />
            </Route>
            <Route path="/Terms">
              <Terms />
            </Route>
          </Switch>
        </div>
        <Support />
        <Bottombar />
      </div>
    </Router>
  );
}

export default App;
