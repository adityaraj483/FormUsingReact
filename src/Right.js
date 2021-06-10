import React from "react";

export default function Right({ cardlist }) {
  return (
    <div id="right">
      {React.Children.toArray(
        cardlist.map((item) => {
          return (
            <>
              <p id="right-name">
                {item.gender === "male" ? "Mr. " : "Ms. "}{" "}
                {item.fname + " " + item.lname + " Says:"}
              </p>
              <p id="right-feed">{item.Feed}</p>
            </>
          );
        })
      )}
    </div>
  );
}
