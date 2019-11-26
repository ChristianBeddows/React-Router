import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Form from "./components/Form"
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="page-background"/>
            <div className="page-body">
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/form">
                        <FormPage/>
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
                    <Link to="/form">Form</Link>
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
            <p className="ipsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus, ante rutrum luctus sagittis, ex libero pharetra risus, vitae tincidunt augue lorem ut sem. Phasellus tempor orci nisl, a efficitur est scelerisque et. In hac habitasse platea dictumst. Aenean at nisi a urna cursus dictum. Nulla accumsan condimentum mi. Pellentesque arcu nunc, ornare sit amet quam non, sodales congue nisl. Cras id egestas tortor. Sed maximus enim id sem pretium, nec tincidunt odio facilisis. Maecenas fermentum mi eu finibus placerat. Duis libero est, molestie non interdum ac, posuere vel magna. Sed aliquam efficitur mauris, pretium iaculis risus fringilla at. Praesent laoreet ex a convallis fringilla. Aenean eget vehicula urna, consequat vehicula ex. Vestibulum elementum nunc non nunc pretium elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas varius interdum tellus ac condimentum.
                <br/>
                <br/>
                Nulla sed sollicitudin urna. Donec id metus posuere, posuere neque eget, molestie erat. Nam lobortis ex purus, ac posuere ex rhoncus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat rutrum nibh id vulputate. Mauris id nunc eu nibh fermentum fermentum. Ut ac mattis lacus. Donec scelerisque aliquam turpis ac porta. Duis ac tortor id sem suscipit mollis. Aliquam erat volutpat. Suspendisse quis porta est. Etiam id dolor risus. Nunc id dictum eros.
                <br/>
                <br/>
                Nam ac pretium justo. Phasellus a ullamcorper neque. Quisque molestie lectus turpis, quis tempor nibh molestie quis. Aenean vel pulvinar odio. Aliquam at porta massa, non mattis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod eleifend mauris. Quisque rhoncus, tortor ut aliquet lacinia, augue mauris posuere metus, vel hendrerit ex erat id urna.
                <br/>
                <br/>
                Sed vel nisl nec sem malesuada auctor et vel augue. Aliquam erat volutpat. Vivamus feugiat risus ac lectus dictum convallis. Morbi ac massa eget sem semper ullamcorper. Pellentesque rutrum augue id turpis lobortis varius. Duis viverra egestas metus vel lacinia. Quisque vitae faucibus enim. Duis sed ligula pellentesque, sodales lacus nec, pharetra velit. Integer laoreet odio a mi lacinia, vel tempor ante pharetra.
                <br/>
                <br/>
                Morbi elementum tristique volutpat. Ut sodales leo eu neque condimentum dapibus. Duis consectetur egestas lorem at laoreet. Sed cursus risus nec metus pulvinar accumsan. Curabitur eu leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas nec bibendum felis. Nunc vehicula mi a eros tincidunt, ac pharetra diam eleifend. Vestibulum quis odio placerat, varius neque at, cursus tortor. Mauris ligula magna, porttitor eu arcu vitae, commodo tempus sapien. Cras convallis diam vitae dui convallis tristique. Fusce faucibus ut tellus eget vulputate. Fusce varius euismod viverra. Curabitur tortor eros, molestie vel porttitor eu, condimentum sed leo. Duis aliquam auctor augue, vitae efficitur arcu tempor id.
                <br/>
                <br/>
                Vestibulum iaculis justo vel risus egestas dictum. Aenean in lectus vitae justo lacinia laoreet. Ut pulvinar luctus justo in rutrum. Etiam in nisl velit. Morbi vitae erat erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque velit ex, feugiat et vestibulum nec, mattis et dui. Fusce vel rhoncus leo. Curabitur elementum sodales accumsan. Mauris sollicitudin malesuada volutpat. Maecenas sed purus ornare, ultrices felis in, eleifend nisl. Donec nibh dui, rutrum at ex sed, convallis tempor mauris. Morbi vitae lorem eu neque tincidunt suscipit sed a ipsum. Nullam quis mi sagittis, rhoncus lorem et, lacinia lectus. Curabitur sapien mauris, pellentesque et nunc scelerisque, varius malesuada nunc.
                <br/>
                <br/>
                Etiam arcu elit, consectetur eget est aliquam, iaculis blandit lacus. Ut at leo egestas enim facilisis placerat fringilla vel ante. Morbi convallis enim id augue blandit, in posuere ligula pellentesque. Duis condimentum mi vitae tincidunt faucibus. Praesent maximus quam nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut molestie aliquet venenatis. Integer vitae vestibulum magna. Aliquam sagittis magna sit amet enim pretium, sit amet gravida eros laoreet.
                <br/>
                <br/>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean laoreet pharetra ante iaculis venenatis. Aenean metus risus, feugiat ac gravida vel, aliquam vel felis. Phasellus lobortis diam vitae ipsum efficitur faucibus. Fusce sed felis sed eros semper maximus quis et nisi. Curabitur ullamcorper ante vitae arcu molestie posuere. Nullam feugiat, ligula vel mollis commodo, erat metus vehicula ante, in tempus ante augue sollicitudin mi.
                <br/>
                <br/>
            </p>
        </div>
    );
}

function FormPage() {
    return (
        <div>
            <h1 className="page-title">Form</h1>
            <NavBar/>
            <Form/>
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