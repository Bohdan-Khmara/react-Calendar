import React, { Component } from "react";
import Month from "./Month";
import Day from "./Day";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <article>
        <Day />
        <Month
          year={currentDate.getUTCFullYear()}
          month={currentDate.getMonth()}
        />
      </article>
    );
  }
}
export default Calendar;
