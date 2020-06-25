import React, { Component } from "react";
import { Link } from "ReactRouterDOM";
import axios from "axios";
import store from "../store";

const Nav = () => {
  const { events } = this.props;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/events">Events ({events.length})</Link>
    </nav>
  );
};

export default Nav;
