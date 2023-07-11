import { useFormik } from "formik";
import * as Yup from "yup";
import image from "../../../Components/image";
import Button from "../../../Components/Button/Button";
import "./Login.css";

const Login = () => {
  // const [type, setType] = useState("password");

  //Formik Logics
  const formiklog = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    //Validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required(`Password can't be empty`),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="front">
      <div className="inner">
        <form className="form-front" onSubmit={formiklog.handleSubmit}>
          <section>
            <div>
              {/* LOGO IMG  */}
              <img
                className="logo-login-signup"
                src={image.ControllerLogo}
                alt=""
              />
            </div>
            <div>
              <h2 className="h2logsign">Sign In</h2>
              {/* EMAIL INPUT FIELD  */}
              <div className="inputfieldlog">
                <input
                  className={`front-text  ${
                    formiklog.touched.email && formiklog.errors.email
                      ? "if-formikerrors-email"
                      : "if-noformikerrors-email"
                  }`}
                  type="text"
                  name="email"
                  value={formiklog.values.email}
                  onChange={formiklog.handleChange}
                  placeholder=" "
                  onBlur={formiklog.handleBlur}
                />
                {/* LABEL FOR EMAIL INPUT FIELD  */}

                <label
                  htmlFor="email"
                  className={`labelsforfields labelemailfront absolute ${
                    formiklog.touched.email && formiklog.errors.email
                      ? "labeltextred"
                      : ""
                  } `}
                >
                  {formiklog.touched.email && formiklog.errors.email
                    ? formiklog.errors.email
                    : "Email"}
                </label>
              </div>

              {/* PASSWORD INPUT FIELD  */}
              <div className="passwordloginput">
                <input
                  className={`  front-password ${
                    formiklog.touched.password && formiklog.errors.password
                      ? "if-formikerrors-email"
                      : "if-noformikerrors-email"
                  }`}
                  // type="password"
                  type="password"
                  name="password"
                  placeholder=" "
                  value={formiklog.values.password}
                  onChange={formiklog.handleChange}
                  onBlur={formiklog.handleBlur}
                />
                {/* {type === "password" ? (
                          <span
                            className="icon-span"
                            onClick={() => setType("text")}
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              beatFade
                              style={{
                                color: "#ffffff",
                                height: "25px",
                                width: "25px",
                              }}
                            />
                            <FaEye />
                          </span>
                        ) : (
                          <span
                            className="icon-span"
                            onClick={() => setType("password")}
                          >
                            <FontAwesomeIcon
                              icon={faEyeSlash}
                              fade
                              style={{
                                color: "#ffffff",
                                height: "25px",
                                width: "25px",
                              }}
                            />
                            <FaEyeSlash />
                          </span>
                        )} */}

                {/* LABEL FOR PASSWORD INPUT FIELD  */}

                <label
                  htmlFor="password"
                  className={`labelsforfields labelpassfront absolute ${
                    formiklog.touched.password && formiklog.errors.password
                      ? "labeltextred"
                      : ""
                  }`}
                >
                  {formiklog.touched.password && formiklog.errors.password
                    ? formiklog.errors.password
                    : "Password"}
                </label>
              </div>
              {/* FORGOT PASSWORD TEXT */}
              <a className="forgotpass">Forgot password?</a>
              {/* LOGIN BUTTON  */}

              <Button typeof="submit" id="loginbtna" className="button-login">
                Login
              </Button>
              {/* DONT HAVE AN ACCOUNT? SIGN UP FIELD  */}
              <div className="flexaccount">
                <p className="link-prescript">Don't have an account?</p>
                <label className="signupbtn" htmlFor="chk" aria-hidden="true">
                  Sign up
                </label>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Login;
