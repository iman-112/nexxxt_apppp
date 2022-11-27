import * as Yup from "yup"


export const loginSchema = Yup.object({

    email:Yup.string()
    .required("Elektron adresinizi qeyd edin.").min(7,"Elektron adresinizi doğru yazdıqınızdan əmin olun."),
    password:Yup.string ()
    .required("Şifrənizi qeyd edin.")
    .min(8,"Minimum 8 hərfdən və ya rəqəmdən ibarət olmalıdır.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Parolda ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol olmalıdır."
      ),

   
})