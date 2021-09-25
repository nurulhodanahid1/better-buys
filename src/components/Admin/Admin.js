import React from 'react';
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducts from './AddProducts/AddProducts';
import ManageProducts from './ManageProducts/ManageProducts';
import EditProducts from './EditProducts/EditProducts';
import { Container } from 'react-bootstrap';

const Admin = () => {

    return (
        <Router>
            <Container>
                <div>
                    <div className="admin-menu">
                        <ul>
                            <li><h4>Product add and edit here!!</h4></li>
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
                    </div>

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
            </Container>
        </Router>
    );
};

export default Admin;