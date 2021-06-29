import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from '../modules/auth/ForgotPassword'
import UpdateProfile from '../modules/auth/UpdateProfile'
import AuthLayout from ".././components/layout/AuthLayout";
import Profile from '../modules/profile/Profile'
import Gallery from '../modules/gallery/Gallery'
import Signin from '../modules/auth/Signin'
import Signup from '../modules/auth/Signup'
import Home from '../modules/dashboard/Home'
import Dashboard from '../modules/dashboard/Dashboard';

export default function PageRoute() {
    return (    
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <PrivateRoute path="/home" component={Home}/>
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/profile" component={Profile} />
          <Route path="/gallery" component={Gallery} />
          <AuthLayout>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </AuthLayout>
        </Switch>
    )
}
