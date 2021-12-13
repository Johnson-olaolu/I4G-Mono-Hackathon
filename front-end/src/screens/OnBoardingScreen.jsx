import React from "react";
import { Row, Col } from "react-bootstrap";
import "./OnBoardingScreen.css";

const OnBoardingScreen = () => {
  return (
    <div className="OnBoardingScreen">
      {/* <div className="nav">
        <div className="navbar">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639335050/Group_75_gkr7xe.png"
              alt=""
            />
          </div>
          <div className="navLinks">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Login</li>
          </div>
        </div>
      </div> */}
      <div className="home">
        <div className="hero">
          <Row className="heroRow">
            <Col md={6} className="heroCol">
              <h2>Fin Track</h2>
              <h1>
                Track your expenditures and business transaction with FinTrack
              </h1>
              <p>Open a free account today to get started</p>
              <button>Get Started</button>
            </Col>
            <Col md={6} className="heroCol">
              <img
                src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639334794/Group_52_rw1ocg.png"
                alt=""
              />
            </Col>
          </Row>
        </div>

        <div className="mockup">
          <img
            src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639334795/Group_41_q5td9q.png"
            alt=""
            />
        </div>
            </div>

        {/* how FinTrack works */}

        <div className="account">
          <div className="container">
            <h3>How FinTrack works</h3>
            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639370058/Polygon_1_aj6str.svg" alt="" />
            <Row className="accountRow">
              <Col md={6} className="accountCol">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639334792/Group_73_lfarmd.png"
                  alt=""
                />
              </Col>
              <Col md={6} className="accountCol">
                <h2>Create an account</h2>
                <h1>Create/login to an existing account to get started</h1>
                <p>
                  An account is created with your email and a desired password
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className=" transactions">
          <div className="container">
            <Row className=" transactionsRow">
              <Col md={{ order: 'last' }} className=" transactionsCol">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639334792/Group_72_ca8gjh.png"
                  alt=""
                />
              </Col>
              <Col md={6} className=" transactionsCol">
                <h2>Track Transactions</h2>
                <h1>
                  Track all your transactions for each of your business branches
                </h1>
                <p>
                  Add all your bsiness branch information while signing up and
                  track all your business trasactions
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className=" statistics">
          <div className="container">
            <Row className=" statisticsRow">
              <Col md={6} className=" statisticsCol">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639334792/Group_71_n6zgfn.png"
                  alt=""
                />
              </Col>
              <Col md={6} className=" statisticsCol">
                <h2>Statistics</h2>
                <h1>Check statistics for your business and compare branches</h1>
                <p>
                  Compare branch statistic and forecast your business income
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="getStarted">
          <div className="container">
            <h1>
              Track your expenditures and business transaction with FinTrack
            </h1>
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer">
          <Row className="footerRow">
          <Col md={4} className="footerCol">
            <p>FinTrack.com</p>
          </Col>
          <Col md={4} className="footerCol">
            <div className="social">
              <img
                src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639336019/Vector-1_pawgjx.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639336018/Vector_ipa83z.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dmixz7eur/image/upload/v1639336018/Group_76_yshmbc.svg"
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="footerCol">

            <p>Copywright 2021 Fintrack fintrack.com</p>
          </Col>
          </Row>
        </div>
    </div>
  );
};

export default OnBoardingScreen;
