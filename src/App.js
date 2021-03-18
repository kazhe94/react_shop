import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import auth from "./store/auth";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path={'/home'}>
                  <MainLayout></MainLayout>
              </Route>
              {
                  auth.isAuth
                      ? <Route path={'/admin'}>
                          <AdminLayout></AdminLayout>
                      </Route>
                      : <Redirect to={'/home'}/>
              }
          </Switch>
      </BrowserRouter>
  );
}

export default App;