import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from './container/Layout/Layout';
import store from './store/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="">
        <Layout/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
