import * as React from "react";
import { Form, Formik, useFormikContext } from "formik";

type Values = {
  // first step
  color: "" | "red" | "green" | "blue";
  // second step
  interests: string[];
  // third step
  firstName: string;
  lastName: string;
  // fourth step
  tel: string;
  // fifth step(last)
  email: string;
};

export const FormContextProvider: React.FC = ({ children }) => (
  <Formik<Values>
    initialValues={{
      color: "",
      interests: [],
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
    }}
    onSubmit={(values) =>
      alert(
        "" +
          `color: ${values.color}\n` +
          `interesets: ${values.interests.join(",")}\n` +
          `name: ${values.firstName} ${values.lastName}\n` +
          `tel: ${values.tel}\n` +
          `email: ${values.email}\n`
      )
    }
  >
    {() => <Form>{children}</Form>}
  </Formik>
);

export const useFormContext = () => {
  return useFormikContext();
};
