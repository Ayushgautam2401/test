import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
};

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const MyForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" 
        // disabled={formik.isSubmitting} to disable the button after submittion
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
