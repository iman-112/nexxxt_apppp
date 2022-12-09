import * as Yup from "yup";

export const profileSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("Telefon nömrəsi əlavə edin.")
    .min(10, "min-10 rəqəmdən istifadə edin ."),
  email: Yup.string().required("Elektron adres doğrulanmadı.").email("Elektron adres səhvdir."),
  desc: Yup.string().required("desc is required."),
  qisayollar: Yup.string().required("qisayollar is required."),
});