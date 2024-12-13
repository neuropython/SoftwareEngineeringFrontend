import { Button, TextField } from "@mui/material";
import "./LoginForm.css";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import loginClient from "../../api/auth/login";
import { useAuth } from "../../api/AuthContext";


type FormValues = {
  username: string;
  password: string;
};

function LoginForm() {
  const initialValues = { username: "", password: "" };

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = useCallback(
    async (values: FormValues) => {
      try {
        login(values.username, values.password);
      } catch (error) {
        console.error(error);
      }
    },
    
    [navigate, t]
  );

  const validationSchema = useMemo(
    () =>
      yup.object({
        username: yup.string().required(t("loginPage.usernameCantBeEmpty")),
        password: yup
          .string()
          .required(t("Password cant be empty"))
          .min(5, t("Password must be at least 5 characters")),
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
            label={t("Username")}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="password"
            label={t("Password")}
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
            {t("Go to register")}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
