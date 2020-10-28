// Home.js
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <div className="page">
                <div className="page-single">
                    <div className="container">
                    <div className="row">
                        <div className="col col-login mx-auto">
                        <div className="text-center mb-6">
                            <img src="./demo/brand/tabler.svg" className="h-6" alt=""/>
                        </div>
                        <form className="card" action="/" method="post">
                            <div className="card-body p-6">
                            <div className="card-title">Login to your account</div>
                            <div className="form-group">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                Password
                                <Link to="/forgot-password" className="float-right small">I forgot password</Link>
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <span className="custom-control-label">Remember me</span>
                                </label>
                            </div>
                            <div className="form-footer">
                              <Link to="/" className="float-right small"><button type="button" className="btn btn-primary btn-block">Sign in</button></Link>
                            </div>
                            </div>
                        </form>
                        <div className="text-center text-muted">
                            
                            Don't have account yet? <Link to="/register">Sign up</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}