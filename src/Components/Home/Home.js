import React from "react";
import "./Home.css";
import ExitPage from "../Exit/ExitPage";
import { useNavigate, useParams } from "react-router";
import Bot from "../chatbot/Bot";

const Home = () => {
  const navigate = useNavigate();
  let { verification } = useParams();

  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="logo"
            src="https://www.happilyever.co/static/media/newLogo.d5911d9d4440299a0327aa45842a62c1.svg"
            alt=""
          />
          <div>
            {verification === "login" ? (
              <Bot />
            ) : verification === "info" ? (
              <ExitPage />
            ) : (
              <>
                <h1 className="home__title">Enter into Student info system</h1>
                <button
                  className="home__button"
                  onClick={() => {
                    navigate("/student/login");
                  }}
                >
                  Enroll Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
