// import './App.css';
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
// import Form from './components/form/form'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import { Router } from 'react-router'
// import {
// CSSTransition,
// TransitionGroup
// } from 'react-transition-group'



import Blog from './components/blog/blog'
import About from './components/about/about'
import Form from './components/form/form'
// import Home from './components/home/home'
import Portfolio from './components/portfolio/portfolio'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Form />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>

  )
}



