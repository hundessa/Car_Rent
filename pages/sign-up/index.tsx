import axios from "axios";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";

const SignUp: React.FC = () => {
  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const handlesignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/sign-up")
    } catch (error) {
      console.log("Error signing up", error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen sign-up-bg">
      <div className="flex mx[100px] border-[1px] rounded-xl backdrop-blur-[17px]">
        <div className="space-y-4 px-[170px] py-[80px]">
          <div className="flex justify-center text-[var(--color)] mb-10">
            <h1 className="font-semibold text-4xl">Sign Up</h1>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validate={values => {
              const errors: Partial<Values> = {};
              if (!values.firstName){
                errors.firstName = "Required"
              }
              else if (
                !/^[A-Za-z]+$/i.test(values.firstName)
              ) {
                errors.firstName = "Name Must Contain Only letters"
              }
              else if (values.firstName.length < 4 || values.firstName.length > 15 ) {
                errors.firstName = "Characters must be between 4 and 15"
              }
              if (!values.lastName){
                errors.lastName = "Required"
              }
              else if (
                !/^[A-Za-z]+$/i.test(values.lastName)
              ) {
                errors.lastName = "Name Must Contain Only letters"
              }
              else if (values.lastName.length < 4 || values.lastName.length > 15 ) {
                errors.lastName = "Characters must be between 4 and 15"
              }
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = "Required"
              }else if ( values.password.length < 6 ) {
                errors.password = "Password must be at least 6 characters"
              }
              return errors;
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form className="space-y-4">
              <div className="space-y2">
                <label htmlFor="firstName" className="font-semibold text-xl text-[var(--color)]">
                  First Name
                </label>
                <br />
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="first name"
                  className="pl-4 h-10 text-white/70 font-semibold max-w-[600px] bg-transparent border-b border-[var(--color)] focus:border-none focus:border-b-[0px] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)] transition-all ease-in-out duration-500"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm font-bold"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="font-semibold text-xl text-[var(--color)]">
                  Last Name
                </label>
                <br />
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="last name"
                  className="pl-4 h-10 text-white/70 font-semibold bg-transparent border-b border-[var(--color)] focus:border-none focus:border-b-[0px] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)] transition-all ease-in-out duration-500"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm font-bold"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-semibold text-xl text-[var(--color)]">
                  Email
                </label>
                <br />
                <Field
                  id="email"
                  name="email"
                  placeholder="john@acme.com"
                  type="email"
                  className="pl-4 h-10 text-white/70 font-semibold bg-transparent border-b border-[var(--color)] focus:border-none focus:border-b-[0px] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)] transition-all ease-in-out duration-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-bold"/>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="font-semibold text-xl text-[var(--color)]">
                  Password
                </label>
                <br />
                <Field
                  id="password"
                  name="password"
                  placeholder="*****"
                  type="password"
                  className="pl-4 h-10 text-white/70 font-semibold bg-transparent border-b border-[var(--color)] focus:border-none focus:border-b-[0px] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color)] transition-all ease-in-out duration-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm font-bold"/>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="my-6 border border-[var(--color)] text-white bg-[var(--color)] px-6 py-2 font-semibold hover:border[2px] hover:bg-transparent hover:text-[var(--color)] transition-all ease-in-out duration-500"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
