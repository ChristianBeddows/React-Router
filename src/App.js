import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="page-body">
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function NavBar() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}

function Home() {
    return (
        <div>
            <h1 className="page-title">Home</h1>
            <NavBar/>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1 className="page-title">About</h1>
            <NavBar/>
        </div>
    );
}

function Users() {
    return (
        <div>
            <h1 className="page-title">Users</h1>
            <NavBar/>
        </div>
    );
}