import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Cart from "../views/Cart/Cart";
import Auth from "../views/Auth/Auth";
import Home from "../views/Home/Home";
import Product from "../views/Product/Product";

const MainLayout = ()=> {
    let { path } = useRouteMatch();

    return (
        <>
            <Navbar/>
            <Switch>
                <Route path={'/home'} exact component={Home}/>
                <Route path={`${path}/product/:id`} component={Product}/>
                <Route path={`${path}/cart`} component={Cart}/>
                <Route path={`${path}/auth`} component={Auth}/>
            </Switch>
        </>
    )
}

export default MainLayout;