import Dashboard from './view/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
import DadosBrutos from './view/DadosBrutos';

function App() {
  return (
    <>
    {/* <Router>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/dados-brutos">
        <DadosBrutos />
      </Route>
    </Router> */}
    <Dashboard />
    </>
    
  );
}

export default App;
