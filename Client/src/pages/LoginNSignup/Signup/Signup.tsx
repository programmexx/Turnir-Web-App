import { useFormik } from "formik";
import * as Yup from "yup";
import image from "../../../Components/image";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  //Router
  const navigate = useNavigate();

  //Formik Logics
  const formiksign = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      // show_password: "",
    },

    //Validate form
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(20, "20 characters or less.")
        .required("First Name"),
      last_name: Yup.string()
        .max(20, "20 characters or less.")
        .required("Last Name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("A phone number is required"),
      password: Yup.string()
        .required("Password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Invalid Password"
        ),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Invalid password")
        .required("Confirm"),
      // show_password: Yup.array(),
    }),

    //New Submit Form
    onSubmit: async (values) => {
      await axios
        .post("http://localhost:3000/api/auth/signup", values)
        .then((response) => {
          console.log(response, values);
          // PUSH TO SUCESS PAGE
          navigate("/success", { state: values });
        })
        .catch((error) => {
          console.log(error, error.response.data.msg);
        });
    },
  });

  return (
    <div className="back">
      <div className="inner">
        <form onSubmit={formiksign.handleSubmit}>
          <section>
            <div>
              <img
                className="logo-login-signup"
                src={image.ControllerLogo}
                alt=""
              />
            </div>
            <h2 className="h2logsign">Sign Up</h2>
            <div>
              <section className="backleft">
                {/* FIRST NAME INPUT FIELD  */}
                <div>
                  <input
                    className={`  names-back left firstnameip ${
                      formiksign.touched.first_name &&
                      formiksign.errors.first_name
                        ? "if-formikerrors-email"
                        : "if-noformikerrors-email"
                    }`}
                    type="text"
                    name="first_name"
                    placeholder=" "
                    value={formiksign.values.first_name}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR FIRST NAME INPUT FIELD  */}

                  <label
                    htmlFor="name"
                    className={`labelsbackfields labelfname absolute ${
                      formiksign.touched.first_name &&
                      formiksign.errors.first_name
                        ? "labeltextred"
                        : ""
                    }`}
                  >
                    {formiksign.touched.first_name &&
                    formiksign.errors.first_name
                      ? formiksign.errors.first_name
                      : "First Name"}
                  </label>
                </div>
                {/* LAST NAME INPUT FIELD  */}
                <div>
                  <input
                    className={`  names-back right lastnameip ${
                      formiksign.touched.last_name &&
                      formiksign.errors.last_name
                        ? "if-formikerrors-email"
                        : "if-noformikerrors-email"
                    }`}
                    type="text"
                    name="last_name"
                    placeholder=" "
                    value={formiksign.values.last_name}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR LAST NAME INPUT FIELD  */}

                  <label
                    htmlFor="name"
                    className={`labelsbackfields labellname absolute ${
                      formiksign.touched.last_name &&
                      formiksign.errors.last_name
                        ? "labeltextred"
                        : ""
                    }`}
                  >
                    {formiksign.touched.last_name && formiksign.errors.last_name
                      ? formiksign.errors.last_name
                      : "Last Name"}
                  </label>
                </div>
                {/* EMAIL INPUT FIELD  */}
                <div>
                  <input
                    className={`  email-back emailbackip ${
                      formiksign.touched.email && formiksign.errors.email
                        ? "if-formikerrors-email"
                        : "if-noformikerrors-email"
                    }`}
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formiksign.values.email}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR EMAIL INPUT FIELD  */}

                  <label
                    htmlFor="email"
                    className={`labelsbackfields labelemailback absolute ${
                      formiksign.touched.email && formiksign.errors.email
                        ? "labeltextred"
                        : ""
                    }`}
                  >
                    {formiksign.touched.email && formiksign.errors.email
                      ? formiksign.errors.email
                      : "Enter your email"}
                  </label>
                </div>
                {/* CONFIRM EMAIL TEXT  */}
                <p className="confirm-email">
                  You’ll need to confirm that this email belongs to you
                </p>

                {/* Phone input field  */}
                <div>
                  <input
                    className={`phoneif`}
                    type="tel"
                    name="tel"
                    placeholder=""
                    value={formiksign.values.phone}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR Phone INPUT FIELD  */}

                  <label
                    htmlFor="tel"
                    // className={}
                  >
                    {"Enter your Phone"}
                  </label>
                </div>
                {/* PASSWORD INPUT FIELD  */}
                <div>
                  <input
                    className={`  names-back pass-left   backpassip ${
                      formiksign.touched.password && formiksign.errors.password
                        ? "if-formikerrors-email"
                        : "if-noformikerrors-email"
                    }`}
                    type="password"
                    name="password"
                    id="signup-password"
                    placeholder=" "
                    value={formiksign.values.password}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR SIGN UP PASSWORD INPUT FIELD  */}

                  <label
                    htmlFor="signup-password"
                    className={`labelsbackfields labelbackpass absolute ${
                      formiksign.touched.password && formiksign.errors.password
                        ? "labeltextred"
                        : ""
                    }`}
                  >
                    {formiksign.touched.password && formiksign.errors.password
                      ? formiksign.errors.password
                      : "Password"}
                  </label>
                </div>
                {/* CONFIRM PASSWORD INPUT FIELD  */}
                <div>
                  <input
                    className={`  names-back pass-right   confirmpassip ${
                      formiksign.touched.confirm_password &&
                      formiksign.errors.confirm_password
                        ? "if-formikerrors-email"
                        : "if-noformikerrors-email"
                    }`}
                    type="password"
                    name="confirm_password"
                    placeholder=" "
                    value={formiksign.values.confirm_password}
                    onChange={formiksign.handleChange}
                    onBlur={formiksign.handleBlur}
                  />

                  {/* LABEL FOR CONFIRM PASSWORD INPUT FIELD  */}

                  <label
                    htmlFor="password"
                    className={`labelsbackfields  labelconfirm absolute ${
                      formiksign.touched.confirm_password &&
                      formiksign.errors.confirm_password
                        ? "labeltextred"
                        : ""
                    }`}
                  >
                    {formiksign.touched.confirm_password &&
                    formiksign.errors.confirm_password
                      ? formiksign.errors.confirm_password
                      : "Confirm"}
                  </label>
                </div>
                {/* EMAIL FORMAT  */}
                <p className="email-format">
                  Use 8 or more characters with a mix of letters, numbers, &
                  symbols
                </p>
                {/* SHOW PASSWORD CHECKBOX  */}
                {/* USE EYE ICON FOR SHOW PASSWORD HERE  */}
              </section>

              <aside>
                <img className="signupimg" src={image.Throphyimg} alt="" />
              </aside>
            </div>
            {/* SIGN UP BUTTON */}

            <Button className="button-login" typeof="submit" id="signupbtna">
              Signup
            </Button>
            <div>
              <p className="link-prescript backp">Already have an account?</p>
              <label
                className="signupbtn backlabel"
                htmlFor="chk"
                aria-hidden="true"
              >
                Login
              </label>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Signup;
