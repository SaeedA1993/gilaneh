import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const loginSchema = yup.object().shape({
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
 
});
