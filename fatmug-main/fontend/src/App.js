import logo from './logo.svg';
import Layout from './container/Layout';
import Login from './container/Login';
import Article from './container/Article';
import SignUp from './container/SignUp';
import Write from './container/Write';
import User from './container/User';
import Home from './container/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component ={SignUp} />
      <Layout>
      <Route exact path="/" component ={Home} />
      <Route exact path="/article/:id" component={Article}/>
      <Route path="/write" component={Write} />
      <Route path="/user" component={User} />
      </Layout>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
