import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <>
         <Router>
            <Switch>
               <Route exact path="/" />
            </Switch>
         </Router>
      </>
   );
}

export default App;
