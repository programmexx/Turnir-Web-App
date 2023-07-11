import LoginPage from "./Login/Login";
import SignupPage from "./Signup/Signup";
import "../../index.css";
import "./LoginNSignup.css";

const Login = () => {
  return (
    <>
      <main className="main-login">
        <div className="containerhabutanastreet">
          <input type="checkbox" id="chk" aria-hidden="true" name="" />
          <div className="content ">
            {/* LOGIN PAGE  */}
            <LoginPage />

            {/* SIGNUP PAGE  */}
            <SignupPage />
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
