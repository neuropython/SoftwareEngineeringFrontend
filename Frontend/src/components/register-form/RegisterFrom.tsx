import { Button, TextField } from "@mui/material";
import "./RegisterForm.css";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import registerClient from "../../api/auth/register";


type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  general?: string;
};

function RegisterForm() {
  const initialValues: FormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = useMemo(
    () =>
      yup.object({
        username: yup.string().required(t("Username Required")),
        email: yup
          .string()
          .email(t("Invalid Mail"))
          .required(t("Email Required")),
        password: yup.string().required(t("Password Required")),
        confirmPassword: yup
          .string()
          .oneOf(
            [yup.ref("password"), undefined],
            t("Passwords must match")
          )
          .required(t("Confirm Password Required")),
      }),
    [t]
  );

  const submit = useCallback(
    (values: FormValues, formik: any) => {
      registerClient(values.username, values.email, values.password).then(
        (response) => {
          if (response.ok) {
            navigate("/login");
          } else {
            response.json().then((data) => {
              formik.setErrors({ general: data.message });
            });
          }
        }
      );
      console.log(values);
    },

    [navigate, t]
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange
    >
      {(formik: any) => (
        <form
          id="registerForm"
          className="Register-form"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <TextField
            id="username"
            name="username"
            variant="outlined"
            label={t("Username")}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="email"
            name="email"
            label={t("Email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label={t("Password")}
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label={t("Confirm Password")}
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          {formik.errors.general && (
            <div className="error">{formik.errors.general}</div>
          )}
          <Button
            color="primary"
            variant="contained"
            type="submit"
            startIcon={<LoginIcon />}
            disabled={!(formik.isValid && formik.dirty)}
          >
            {t("Register")}
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => navigate("/login")}
          >
            {t("Login")}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
