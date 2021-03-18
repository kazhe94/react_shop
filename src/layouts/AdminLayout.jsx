import React from 'react'
import AdminNavbar from "../components/Admin/AdminNavbar";
import Admin from "../views/Admin/Admin";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Orders from "../views/Admin/Orders/Orders";

const AdminLayout = (props)=> {
    const { path } = useRouteMatch()
    return (
        <>
            <AdminNavbar/>
            <Switch>
                <Route path={`/admin`} exact component={Admin}/>
                <Route path={`${path}/orders`} component={Orders}/>
            </Switch>
        </>
    )
}

export default AdminLayout;