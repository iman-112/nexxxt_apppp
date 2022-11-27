import * as Yup from "yup"


export const registerSchema = Yup.object({
    fullname: Yup.string()
    .required("Adiniz Teleb olunur")
    .min(3,"Adiniz 3 herfden daha cox olmalidir" ),



    email:Yup.string()
    .required("Elektron adressinizi qeyd edin").min(7,"Elektron adressinizi dogru yazdiqinizdan emin olun"),

    password:Yup.string ()
    .required("Şifrənizi qeyd edin.")
    .min(8,"Minimum 8 hərfdən və ya rəqəmdən ibarət olmalıdır.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Parolda ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol olmalıdır."
      ),
      confirmPassword:Yup.string()
      .required("Şifrə xanalarını uyğunlaşdırın.").oneOf([Yup.ref('password'), null] , "Şifrələr uyğun  gəlmir."),


})