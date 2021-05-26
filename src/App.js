import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BlogPage from './components/blog/BlogPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          {/* <Route path="/article">
            <BlogPage />
          </Route> */}
          <Route path='/article' component={BlogPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
