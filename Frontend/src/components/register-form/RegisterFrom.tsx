import { Button, TextField } from "@mui/material";
import "./RegisterForm.css";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

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
        username: yup.string().required(t("registerPage.usernameRequired")),
        email: yup
          .string()
          .email(t("registerPage.invalidEmail"))
          .required(t("registerPage.emailRequired")),
        password: yup.string().required(t("registerPage.passwordRequired")),
        confirmPassword: yup
          .string()
          .oneOf(
            [yup.ref("password"), undefined],
            t("registerPage.passwordsMustMatch")
          )
          .required(t("registerPage.confirmPasswordRequired")),
      }),
    [t]
  );

  const submit = useCallback(
    (values: FormValues, formik: any) => {
      //   axios
      //     .post("/api/register", values)
      //     .then((response) => {
      //       if (response.data.success) {
      //         navigate("/home");
      //       } else {
      //         formik.setFieldError("email", t("registerPage.registrationFailed"));
      //       }
      //     })
      //     .catch(() => {
      //       formik.setErrors({ general: t("registerPage.registrationFailed") });
      //     });
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
            label={t("registerPage.username")}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="email"
            name="email"
            label={t("registerPage.email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label={t("registerPage.password")}
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
            label={t("registerPage.confirmPassword")}
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
            {t("registerPage.register")}
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => navigate("/login")}
          >
            {t("registerPage.goToLogin")}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
