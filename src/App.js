import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Layout from './container/Layout/Layout';

function App() {
  return (
    <Router>
    <div className="">
      <Layout/>
    </div>
    </Router>
  );
}

export default App;
