import * as Yup from "yup"


export const adminSchema = Yup.object({

    username:Yup.string()
    .required("İstifadəçi adınızı qeyd edin.").min(3,"Minimum 3 hərf"),
    password:Yup.string ()
    .required("Şifrənizi qeyd edin")
    .min(8,"Minimum 8 hərf və ya rəqəm yazın.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Parolda ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol olmalıdır."
      ),

   
})