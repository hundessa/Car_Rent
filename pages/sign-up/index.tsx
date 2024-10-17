import { Formik, Field, Form, FormikHelpers } from "formik";

const SignUp: React.FC = () => {
  interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }

  return (
    <div className="flex justify-center items-center h-screen sign-up-bg">
      <div className="flex mx[100px] border-[1px] rounded-xl backdrop-blur-[7px]">
        <div className="space-y-4 px-[170px] py-[80px]">
          <div className="flex justify-center text-[var(--color)] mb-10">
            <h1 className="font-semibold text-4xl">Sign Up</h1>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
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
