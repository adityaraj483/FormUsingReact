import React, { useState } from "react";

export default function Left({ setCardlist }) {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [Feed, setFeed] = useState("");
  let [gender, setGender] = useState("");

  return (
    <div id="left">
      <form>
        <input
          type="text"
          id="fname"
          required
          name="fname"
          placeholder="Enter Your First Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          id="lname"
          required
          name="lname"
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="Enter Your Last Name"
        />
        <br />
        <input
          type="email"
          id="email"
          required
          name="email"
          placeholder="Enter Your Email"
        />
        <br />

        <div className="radioinput">
          <span>Gender:</span>
          <br />
          <input
            type="radio"
            id="male"
            required
            name="gender"
            value="male"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            required
            name="gender"
            value="female"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <div className="feedinput">
          <span>Feedback:</span>
          <br />
          <textarea
            required
            cols="40"
            rows="10"
            onChange={(e) => {
              setFeed(e.target.value);
            }}
          ></textarea>
        </div>
        <div style={{ width: "50%" }}>
          <button
            type="submit"
            id="submit"
            onClick={(e) => {
              e.preventDefault();

              setCardlist((item) => {
                return [
                  ...item,
                  {
                    fname: fname,
                    lname: lname,
                    Feed: Feed,
                    gender: gender
                  }
                ];
              });
            }}
          >
            Submit Now
          </button>

          <button type="reset">Reset Now</button>
        </div>
      </form>
    </div>
  );
}
