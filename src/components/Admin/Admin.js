import React from 'react';
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducts from './AddProducts/AddProducts';
import ManageProducts from './ManageProducts/ManageProducts';
import EditProducts from './EditProducts/EditProducts';

const Admin = () => {

    return (
        <Router>
            <div>
                <ul>
                    <li><h3>Better Buys</h3></li>
                    <li>
                        <Link to="/admin/addProducts">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/manageProducts">Manage Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/editProducts">Edit Products</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route path="/admin/addProducts">
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path="/admin/manageProducts">
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path="/admin/editProducts">
                        <EditProducts></EditProducts>
                    </Route>
                    <Route exact path="/admin">
                        <AddProducts></AddProducts>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Admin;