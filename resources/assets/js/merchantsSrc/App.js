import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// Container components
import MerchantsPage from './containers/MerchantsPage';
import EditMerchantPage from './containers/EditMerchantPage';
import AddMerchantPage from './containers/AddMerchantPage';
import BidsPage from './containers/BidsPage';
// Posts Container Components
import PostsPage from './containers/posts/PostsPage';
import AddPostPage from './containers/posts/AddPostPage';

// Assets
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink activeClassName="selected" to="/merchants/1">Merchant list</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Add merchant</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/posts">Posts</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/posts/add">Add Post</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/merchants/:pageNo?" component={MerchantsPage}/>
                    <Route path="/add" component={AddMerchantPage}/>
                    <Route path="/edit/:id" component={EditMerchantPage}/>
                    <Route path="/bids/:id" component={BidsPage}/>
                    <Route exact path="/posts" component={PostsPage}/>
                    <Route path="/posts/add" component={AddPostPage}/>
                </div>
            </div>
        </Router>
    );
};

export default App;
