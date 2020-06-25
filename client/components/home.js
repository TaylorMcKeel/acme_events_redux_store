import React, { Component } from "react";
import axios from "axios";
import store from "../store";

const Home = () => {
  const { events } = this.props;

  return <h4>You got {events.length} events!!</h4>;
};

export default Home;
