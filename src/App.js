import './App.css';
import AddStudent from './components/AddStudent';
import Allstudents from './components/Allstudents';
import NavigationBar from './components/NavigationBar';
import { Route, Switch } from 'react-router-dom';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Allstudents} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/editStudent/:id" component={EditStudent} />
      </Switch>
    </div>
  );
}

export default App;
