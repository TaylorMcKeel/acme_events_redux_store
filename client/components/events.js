import React, { Component } from "react";
import axios from "axios";
import store from "../store";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    const { events } = this.state;

    return (
      <div>
        <button
          onClick={() => {
            ev.preventDefault();
          }}
        >
          Create
        </button>
        <ul>
          {events
            .map((e) => {
              return <li onClick={}>{(e.name, e.date)}</li>;
            })
            .join("")}
        </ul>
      </div>
    );
  }
}

export default Events;
