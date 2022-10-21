import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../models/levels.enum";

const TaskFormFormik = () => {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };
  const taskSchema = Yup.object().shape({
    name: Yup.string().max(12, "Task too long").required("Task is required"),
    description: Yup.string().max(40, "Task too long"),
    level: Yup.LEVELS(),
  });
  return (
    <div>
      <Formik
        initialValues={{
          initialValues,
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="name">Task:</label>
            <Field id="name" type="text" name="name" placeholder="Task name" />

            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}

            <label htmlFor="description">Description:</label>
            <Field
              id="description"
              type="text"
              name="description"
              placeholder="Task description..."
            />

            {/* Email Errors */}
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div"></ErrorMessage>
            )}

            <label htmlFor="level">Priority:</label>
            <Field component="select" id="level" name="level" multiple={true}>
              <option value={LEVELS.NORMAL}>NORMAL</option>
              <option value={LEVELS.URGENT}>URGENT</option>
              <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </Field>

            {errors.confirm && touched.confirm && (
              <ErrorMessage name="level" component="div"></ErrorMessage>
            )}

            <button type="submit">Add New Task</button>
            {isSubmitting ? <p>Adding your task</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormFormik;
