import React, { Component } from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name] : value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        const data = this.state;
        Axios.post('/api/members/login',data)
             .then(res => {
                 const token = res.data.access_token;
                 this.setAuthorizationToken(token);
                 console.log(res);
             }).catch(err => {
                 throw (err);
             });
    }

    setAuthorizationToken(token, refresh = false) {
        if (token) {
            // refresh && removeAxiosDefaultToken();
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            // removeAxiosDefaultToken();
        }
    }
    giveUser(e){
        e.preventDefault();
        axios.post('api/members/me').then(
            res => {
                console.log(res.data);
            }
        ).catch(err=>{
            throw (err);
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email : </label>
                        <input type="text" name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password : </label>
                        <input type="password" name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                <button onClick={this.giveUser}>User</button>
            </div>
        );
    }
}

render(<Login></Login>,document.getElementById('root'));