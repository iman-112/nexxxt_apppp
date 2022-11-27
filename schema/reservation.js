import * as Yup from "yup"


export const reservationSchema = Yup.object({
    fullname: Yup.string()
    .required("Adınız  tələb olunur.")
    .min(3,"Adınız 3 hərfdən daha çox olmalıdır" ),

    phoneNumber:Yup.string()
    .required("Nömrənizi qeyd edin.")
    .min(10,"Nomrəniz 10  rəqəmdən ibarət olmalıdır."),

    email:Yup.string()
    .required("Elektron adressinizi qeyd edin").min(7,"Elektron adresinizi doğru yazdıqınızdan əmin olun."),
    
    xidmet: Yup.string()
    .required("Bu xana doldurulmalidir.")
    .min(5,"Minimum 5 ədəd girilməlidir."),

    elaveistek: Yup.string()
    .required("İstəklərinizi qeyd edin")
    .min(15,"İstəyinizi anlaya bilmək üçün daha ətraflı qeyd edin.")
})