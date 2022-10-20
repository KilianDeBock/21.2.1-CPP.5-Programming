import { Field, Form, Formik } from "formik";
import { TextField } from "./components/TextField.component";
import { Button } from "./components/Button.component";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string(),
});

function App() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ values, handleChange, isSubmitting, errors }) => (
        <Form>
          <div>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />
          </div>
          <div>
            <Field
              placeholder={"De Bock"}
              name={"lastName"}
              as={TextField}
              type={"input"}
            />
          </div>
          <div>
            <Button type={"submit"} disabled={isSubmitting}>
              Submit!
            </Button>
          </div>

          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default App;
