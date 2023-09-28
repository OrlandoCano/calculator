import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CalculatorComponent from "./components/CalculatorComponent";

function App() {
  return (
      <div className="container">
        <Router>
          <div className="col-md-12">
            <h1 className="text-center" style={style}>Calculator</h1>
            <Switch>
              <Route path="/" component={CalculatorComponent} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

const style = {
    color: 'lightgray',
    margin: '10px'
}

export default App;
