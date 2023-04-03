import React from "react";
import { Formik, Form, Field } from "formik";
import validations from "./validitions";
import { useTodo } from "../../../contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={async (values, bag) => {
        console.log(values);

        addTodo(values.text);
        
        bag.resetForm();
      }}
      validations={validations}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default TodoForm;
