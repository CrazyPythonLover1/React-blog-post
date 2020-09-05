import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Blog from './components/Blog/Blog';
import PostDetail from './components/PostDetail/PostDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
       <Router>
         <Switch>
           <Route path="/blog">
            <Blog/>
           </Route>
           <Route path="/post/:postId">
             <PostDetail></PostDetail>
           </Route>
           <Route path="/">
            <Blog/>
           </Route>
         </Switch>
       </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
