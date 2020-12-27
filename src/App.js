import './App.css';
import HomePage from './pages/homepage/home-page.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage=()=>{
  return(
    <div>
      This is a hats page
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
