import React, { useState } from "react";
import TextInput from "#components/Form/TextInput";
import FileUploader from "#components/Form/FileUploader";

const FormPage: React.FC = () => {
  const initialFormData = {
    name: "",
    address: "",
    email: "",
    contact: "",
    photo: null as File | null,
    cv: null as File | null,
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "contact" && value && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange =
    (type: "photo" | "cv") => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFormData((prev) => ({ ...prev, [type]: e.target.files![0] }));

        if (errors[type]) {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[type];
            return newErrors;
          });
        }
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, address, email, contact, photo, cv } = formData;
    const emailRegex = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

    const contactRegex = /^\d{10}$/;

    let newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors = { ...newErrors, name: "Name is required" };
    }

    if (!address.trim()) {
      newErrors = { ...newErrors, address: "Address is required" };
    }

    if (!email.trim()) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!emailRegex.test(email)) {
      newErrors = { ...newErrors, email: "Invalid email format" };
    }

    if (!contact.trim()) {
      newErrors = { ...newErrors, contact: "Contact is required" };
    } else if (!contactRegex.test(contact)) {
      newErrors = {
        ...newErrors,
        contact: "Contact must be exactly 10 digits",
      };
    }

    if (!photo) {
      newErrors = { ...newErrors, photo: "Photo is required" };
    }

    if (!cv) {
      newErrors = { ...newErrors, cv: "CV is required" };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert("Form submitted!");
      console.log(formData);
      setFormData(initialFormData);
      setErrors({});
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#f4f4f4] w-full flex items-center justify-center p-5 md:p-10 h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-5 md:p-10 shadow-xl rounded bg-white w-full md:w-2/3 xl:w-1/2"
      >
        <TextInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          placeholder={"Name"}
        />
        <TextInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          error={errors.address}
          placeholder={"Address"}
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          type="text"
          placeholder={"Email"}
        />
        <TextInput
          label="Contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          error={errors.contact}
          type="tel"
          placeholder={"Contact Number"}
        />

        <FileUploader
          label="Photo"
          accept="image/*"
          onChange={handleFileChange("photo")}
          error={errors.photo}
          fileName={formData.photo?.name}
          placeholder={"Upload Photo"}
        />

        <FileUploader
          label="CV"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange("cv")}
          error={errors.cv}
          fileName={formData.cv?.name}
          placeholder={"Upload CV"}
        />

        <button
          type="submit"
          className="mt-4 bg-[#ffdc1c] text-[#174bdd] px-8 py-2 rounded hover:bg-[#ffab00] font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-progress"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
