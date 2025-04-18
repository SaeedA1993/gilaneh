import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const signupSchema = yup.object().shape({
  name: yup.string().required("لطفاً نام خود را وارد نمایید"),
  email: yup
    .string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("لطفاً ایمیل خود را وارد نمایید"),
  
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "رمز عبور باید دارای حداقل 8 کاراکتر و شامل حداقل یک حرف کوچک، یک حرف بزرگ و یک عدد باشد",
    })
    .required("لطفاً رمز عبور خود را وارد نمایید"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور باید مطابقت داشته باشد")
    .required("لطفاً رمز عبور خود را تکرار نمایید"),
});
