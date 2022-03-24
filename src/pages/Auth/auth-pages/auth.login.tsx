import { Alert, Checkbox, FormControlLabel, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import * as authRedux from "../../../redux/auth/auth.redux";
import { useState } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Lütfen geçerli bir email adresi giriniz !")
      .required("Email zorunlu bir alan !"),

    password: Yup.string()
      .min(2, "Minimum 7 karakter")
      .max(50, "Maximum 50 karakter")
      .required("Parola zorunlu bir alandır"),
  });

  const signIn = async (value: any) => {
    setLoading(true);
    const res = (await login(value)) as any;

    if (!res.status) {
      setErrorMessage("Lütfen bilgilerinizi kontrol ediniz !");
    } else {
      toast.success("Hoşgeldin " + res.data.user.name);
      const { token, user } = res.data;
      dispatch(authRedux.actions.login(token?.access_token, user));
    }

    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: signIn,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="vh-100">
        <div className="row h-100 p-3 px-4 ">
          <div className="col-md-5 border h-100 rounded shadow-sm d-flex justify-content-center flex-column">
            <h1 className="ps-5">Hi, Welcome !</h1>
            <img width={"100%"} src="/illustration_login.png" alt="" />
          </div>
          <div className="col-md-7 d-flex align-items-center justify-content-center">
            <div className="login-card">
              <h3 className="text-gray-500 mb-3">Sign in to Minimal</h3>
              <h6 className="text-gray mb-4">Enter your details below.</h6>

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

              <TextField
                name="email"
                className="my-3"
                label="Email Address"
                type="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <LoadingButton
                loading={loading}
                type="submit"
                className="my-3 fluid"
                variant="contained"
              >
                Login
              </LoadingButton>

              <div className="login-card-footer d-flex justify-content-between align-items-center">
                <span>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                  />
                </span>
                <a href="">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
