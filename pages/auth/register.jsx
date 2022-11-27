import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { registerSchema } from "../../schema/register";
import Head from 'next/head'

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword:"",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    
    {
        id:1,
        name:"fullname",
        type:"text",
        placeholder:"Adiniz",
        value: values.fullname,
        errorMessage: errors.fullname,
        touched: touched.fullname,
      }
    ,{
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Sizin elektron adresiniz.",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Sizin Sifreniz",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
        id: 3,
        name: "confirmPassword",
        type: "password",
        placeholder: "Sifrenizi tesdiqleyin",
        value: values.confirmPassword,
        errorMessage: errors.confirmPassword,
        touched: touched.confirmPassword,
      },
  ];

  return (
    <div className="container mx-auto">
      <Head>
        <title>Qeydiyyat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Qeydiyyatdan kec</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary !bg-white !text-primary border-2 !border-primary hover:!text-white hover:!bg-primary transition-all">Qeydiyyat</button>
       
          <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-secondary">
             Giris ekranina geri qayit.
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;