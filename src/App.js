import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useContext, useEffect } from 'react';
import NavBar from './pages/NavBar';
import { List, ListInlineItem } from 'reactstrap';
import {
  HashRouter,
  Routes,
  Route } from 'react-router-dom';
import Deposit from './pages/Deposits';
import Withdraw from './pages/Withdrawals';
import CreateAccount from './pages/CreateAccount';
import Transactions from './pages/Transactions';
import HomePage from './pages/HomePage';
import NewAccount from './pages/NewAccount';
import AllData from './pages/AllData';
import CalculatorCard from './pages/CalculatorCard';
import Success from './pages/Success';
import NewsPage from './pages/NewsPage';
import UserContext from './components/UserContext';
import githubicon from './pages/images/githubicon.png';
import linkedinicon from './pages/images/linkedinicon.png';
import emailicon from './pages/images/emailicon.png'



function App() {
  
  const context = useContext(UserContext);


  return (
    
    <div className="App">
      <div className="wrapper">
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={ <HomePage /> } />
            <Route path="/createaccount" element={ <CreateAccount /> } />
            <Route path="/deposit" element={ <Deposit /> } />
            <Route path="/withdraw" element={ <Withdraw /> } />
            <Route path="/transactions" element={ <Transactions /> } />
            <Route path="/alldata" element={ <AllData /> } />
            <Route path="/newaccount" element={ <NewAccount /> } />
            <Route path="/success" element={ <Success /> } />
            <Route path="/calculator" element={ <CalculatorCard /> } />
            <Route path="/news" element={ <NewsPage /> } />

          </Routes>
        </HashRouter>
      </div>

      <footer className="text-center text-md-right">
        <List type="inline">
          <ListInlineItem>
            <a href="https://github.com/LanaWhiskey" target="_blank">
              <img src={ githubicon }/>
            </a>
          </ListInlineItem>
          <ListInlineItem>
            <a href="https://www.linkedin.com/in/svitlana-williams-963228250" target="_blank">
              <img src={ linkedinicon }/>
            </a>
          </ListInlineItem>
          <ListInlineItem>
            <a href="mailto:lanawill1015@gmail.com" target="_blank">
              <img src={ emailicon }/>
            </a>
          </ListInlineItem>
        </List>
      </footer>
    </div>
    
  );
}

export default App;
