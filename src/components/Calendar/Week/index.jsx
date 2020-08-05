import React from "react";
import CalendarDate from "./CalendarDate";

function Week(props) {
  return (
    <tr>
      <CalendarDate date={1} />
      <CalendarDate date={2} />
      <CalendarDate date={3} />
      <CalendarDate date={4} />
      <CalendarDate date={5} />
      <CalendarDate date={6} />
      <CalendarDate date={7} />
    </tr>
  );
}

export default Week;
