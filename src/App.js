import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
