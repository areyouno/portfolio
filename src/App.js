import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";

function App() {
       let routes = (
              <Route
                     render={({ location }) => (
                            <TransitionGroup>
                                   <CSSTransition
                                          key={location.key}
                                          in={true}
                                          appear={true}
                                          timeout={450}
                                          classNames="transition">
                                          <Switch location={location}>
                                                 <Route exact path="/">
                                                        <Redirect to="/About" />
                                                 </Route>
                                                 <Route path="/About" component={About} />
                                                 <Route exact path="/Experiences" component={Experiences} />
                                                 <Route path="/Projects" component={Projects} />
                                                 {/* <Route path="/Contact" component={Contact} /> */}
                                          </Switch>
                                   </CSSTransition>
                            </TransitionGroup>
                     )}
              />
       );
       return (
              <BrowserRouter>
                     <Layout>{routes}</Layout>
              </BrowserRouter>
       );
}

export default App;
