import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  console.log("DemoList runs");

  return (
    <div className={classes.list}>
      <ul>{props.title}</ul>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
