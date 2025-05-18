import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useState, type FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/shared/contexts/LanguageContext";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage: FunctionComponent = () => {
  const [t] = useTranslation();
  const { dir } = useLanguage();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("login.errors.emailInvalid"))
      .required(t("login.errors.emailRequired")),
    password: Yup.string().required(t("login.errors.passwordRequired")),
  });

  const handleSubmit = async (values: LoginFormValues) => {
    console.log("Submitted values:", values);
    // Handle API call or authentication here
    navigate("/admin");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden" dir={dir}>
        <header className="sticky top-0 z-50 w-full border-b bg-background px-32">
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">CarMarket</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-[#1e9df1] via-[#1e9df1] to-[#1e9df1]">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold">
                {t("login.title")}
              </CardTitle>
              <CardDescription>{t("login.subtitle")}</CardDescription>
            </CardHeader>

            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("login.email")}</Label>
                      <div className="relative">
                        <Mail className="absolute start-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("login.emailPlaceholder")}
                          className="ps-10"
                          disabled={isSubmitting}
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-sm text-destructive"
                      />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">{t("login.password")}</Label>
                      </div>
                      <div className="relative">
                        <Lock className="absolute start-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder={t("login.passwordPlaceholder")}
                          className="ps-10"
                          disabled={isSubmitting}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute end-2 top-2 h-5 w-5"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showPassword
                              ? t("login.hidePassword")
                              : t("login.showPassword")}
                          </span>
                        </Button>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-sm text-destructive"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("login.loggingIn")
                        : t("login.loginButton")}
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
