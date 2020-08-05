import React from "react";
import Week from "./../Week";

function Month() {
  const weekList = ["s", "m", "t", "w", "t", "f", "s"];
  const createWeekList = weekList.map((daysOfWeek) => <th>{daysOfWeek}</th>);

  return (
    <table>
      <thead>
        <caption>August 2020</caption>
        <tr>{createWeekList}</tr>
      </thead>
      <tbody>
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </tbody>
    </table>
  );
}

export default Month;
