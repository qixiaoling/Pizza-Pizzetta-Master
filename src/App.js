
import './App.css';
import Home from '../src/pages/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FullMenu from "./pages/fullMenu/FullMenu";
import Question from "./pages/Question";
import Gallery from "./pages/Gallery";
import OwnPizza from "./pages/OwnPizza/OwnPizza";


function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/menu' exact component={FullMenu}/>
                <Route path='/question' exact component={Question}/>
                <Route path='/gallery' exact component={Gallery}/>
                <Route path='/own-pizza' exact component={OwnPizza}/>
            </Switch>

        </Router>

    </>
  )
}

export default App;
