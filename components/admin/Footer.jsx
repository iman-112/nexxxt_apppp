import React from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";

const Footer = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        phoneNumber: "",
        desc: "",
        qisayollar: "",
       
      },
      onSubmit,
      validationSchema: footerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Elektron adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefon nömrəsi",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "desc",
      type: "text",
      placeholder: "Açıqlama",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 4,
      name: "qisayollar",
      type: "text",
      placeholder: "Qisayollar",
      value: values.qisayollar,
      errorMessage: errors.qisayollar,
      touched: touched.qisayollar,
    },
    
 
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Footer Ayarları</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
  
      <button className="btn-primary !text-white hover:!text-hover !bg-primary mt-4">Yenilə</button>
    </form>
  );
};

export default Footer;