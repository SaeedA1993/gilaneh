import * as yup from "yup";

export const reviewSchema = yup.object().shape({
   textMessage: yup.string().required("لطفاً پیام خود را وارد نمایید"),
});
