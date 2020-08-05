import React from "react";
import styles from "./CalendarDate.module.scss";
import className from "classnames";

function CalendarDate(props) {
  const { date, isCurrentDate, isCurrentMonth } = props;
  const className = className(styles.date, {
    [styles.currentDate]: isCurrentMonth && currentDate === date,
    [styles.otherMontDate]: !isCurrentMonth,
  });
  return <td className={className}>{date}</td>;
}

export default CalendarDate;
