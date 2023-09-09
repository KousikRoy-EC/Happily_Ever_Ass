import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./ExitPage.css";

const ExitPage = () => {
  const {name,age} = useSelector((state)=>state.update.studentInfo);

  return (
    <div className="exitClass">
      <p>
        {" "}
        <span className="text_1 text">
          Your name <span className="name">{name}</span>
        </span>
      </p>
      <p>
        {" "}
        <span className="text_2 text">Aged {age} has been added to system.</span>
      </p>
      <p>
        {" "}
        <span className="text_3 text">
          You may now{" "}
          <Link to="/" className="exit-text">
            Exit
           </Link>
        </span>
      </p>
    </div>
  );
};

export default ExitPage;
