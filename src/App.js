import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from './component/product';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    <div className="App">
        <Router>
           <Switch>
               <Route exact={true} path="/" component={Index} />
           </Switch>
       </Router>
    </div>
  );
}

export default App;
