
/////////////  DEPENDENCIES BEGIN /////////////
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Blog from './components/blog/blog'
import About from './components/about/about'
import Form from './components/form/form'
import Portfolio from './components/portfolio/portfolio'
/////////////  DEPENDENCIES END /////////////



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



