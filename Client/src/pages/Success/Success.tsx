import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useLocation } from "react-router-dom";
import image from "../../Components/image";
import Button from "../../Components/Button/Button";
import "./Success.css";

const Success = () => {
  const [pieces, setPieces] = useState(200);
  const location = useLocation();
  const values = location.state;
  // console.log(values);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <div className="success_container">
      <div className="successpge">
        <img className="logosuccess" src={image.ControllerLogo} alt="" />
        <h1 className="greatjob">
          Great job {values ? values.first_name : ""}👍
        </h1>
        <h2 className="welcometodfam">Welcome to the Turnir gaming family👋</h2>
        <p className="centerpsuc">
          We’ve sent a verification link to{" "}
          {values ? values.email : "your email"} to confirm your email address.{" "}
          <br />
          Please click the link in your email to get started with your account.{" "}
          <br />
          If you have not received the verification email, click the button
          below to resend the verification email.
        </p>
        <Button disabled={false} className="btnsuccess">
          Resend email
        </Button>
        <Confetti gravity={0.2} numberOfPieces={pieces} className="Confetti" />
      </div>
    </div>
  );
};

export default Success;
