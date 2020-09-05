import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Blog from './components/Blog/Blog';
import PostDetail from './components/PostDetail/PostDetail'
import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Container  maxWidth="sm">
       <Router>
         <Switch>
           <Route path="/blog">
             <NavBar></NavBar>
            <Blog />
           </Route>
           <Route path="/post/:postId">
           <NavBar></NavBar>
             <PostDetail></PostDetail>
           </Route>
           <Route exact path="/">
           <NavBar></NavBar>
            <Blog/>
           </Route>
         </Switch>
       </Router>
      </Container>
    </div>
  );
}

export default App;
