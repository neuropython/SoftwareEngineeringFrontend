import { Button, TextField } from "@mui/material";
import "./LoginForm.css";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios, { AxiosInstance } from "axios";
import { useTranslation } from "react-i18next";

type FormValues = {
  username: string;
  password: string;
};

function LoginForm() {
  const initialValues = { username: "", password: "" };

  const { t } = useTranslation();
  const navigate = useNavigate();
  //const apiClient = useApi();

  const submit = useCallback(
    (values: FormValues, formik: any) => {
      console.log(values);
      /*apiClient.login(values).then((response) => {
        if (response.success) {
          navigate("/home");
        } else {
          formik.setFieldError(
            "password",
            t("loginPage.invalidUsernameOrPassword")
          );
        }
      });
      */
    },
    [navigate, t]
  );

  const validationSchema = useMemo(
    () =>
      yup.object({
        username: yup.string().required(t("loginPage.usernameCantBeEmpty")),
        password: yup
          .string()
          .required(t("loginPage.passwordCantBeEmpty"))
          .min(5, t("loginPage.passwordMustBeAtLeast5Characters")),
      }),
    [t]
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
          id="loginForm"
          className="Login-form"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <TextField
            id="username"
            label={t("loginPage.username")}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="password"
            label={t("loginPage.password")}
            variant="outlined"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            {t("login")}
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => navigate("/register")}
          >
            {t("loginPage.goToRegister")}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
