import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SampleForm = ({ existingBrand, onSubmit }) => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Brand name is required"),
    description: Yup.string().required("Description is required"),
    logo: Yup.string().url("Invalid URL").required("Logo URL is required"),
  });

  // Initial form values
  const initialValues = {
    name: existingBrand?.name || "",
    description: existingBrand?.description || "",
    logo: existingBrand?.logo || "",
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    const brandData = {
      id: existingBrand?.id || Date.now(),
      ...values,
    };
    console.log("Submitted Data:", brandData); // Replace with dispatch or API call
    onSubmit?.(brandData); // Notify parent component (optional)
    resetForm(); // Reset form after submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 p-5 border border-gray-300">
          <h3 className="text-lg font-semibold">
            {existingBrand ? "Edit Brand" : "Add a New Brand"}
          </h3>

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Brand Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              id="description"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <label htmlFor="logo" className="block text-sm font-medium">
              Logo URL
            </label>
            <Field
              type="text"
              name="logo"
              id="logo"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="logo"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onSubmit?.()} // Cancel button handler
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              {isSubmitting
                ? "Submitting..."
                : existingBrand
                ? "Update Brand"
                : "Add Brand"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SampleForm;
