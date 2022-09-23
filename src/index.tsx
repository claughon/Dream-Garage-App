import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, SignIn } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './styles.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<React.StrictMode>
  <Provider store= {store}>
    <Router>
      <Routes>
        <Route path='/' element={<Home title  ={'Drone Inventory'}/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
  </Provider>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
