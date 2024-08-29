import { useForm } from "react-hook-form";
import React from "react";
import "./Login.css";



export default function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" className="center-image" />
        <h1>Please Register here for more offers</h1>

        <div>
          <label htmlFor="FirstName">First Name</label>
          <input
            id="FirstName"
            {...register("FirstName", {
              required: "The first name is compulsory",
              minLength: {
                value: 5,
                message: "The name has to be greater than 5 characters"
              }
            })}
          />
          {errors.FirstName && <p style={{ color: "red" }}>{errors.FirstName.message}</p>}
        </div>

        <div>
          <label htmlFor="LastName">Last Name</label>
          <input
            id="LastName"
            {...register("LastName", {
              required: "The last name is compulsory",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "The last name should not contain any numbers"
              }
            })}
          />
          {errors.LastName && <p style={{ color: "red" }}>{errors.LastName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email", {
              required: "Please enter your valid email"
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="Graduation">Graduation</label>
          <select
            id="Graduation"
            {...register("Graduation", {
              required: "You have to choose a graduation option",
              validate: {
                notOther: (value) => value !== "OTHER" || "Please choose any graduation course"
              }
            })}
          >
            <option value="">Select an option</option>
            <option value="B.E">B.E</option>
            <option value="BCA">BCA</option>
            <option value="BA">BA</option>
            <option value="BSC">BSC</option>
            <option value="MSC">MSC</option>
            <option value="MTECH">MTECH</option>
            <option value="DIPLOMA">DIPLOMA</option>
            <option value="OTHER">OTHER</option>
          </select>
          {errors.Graduation && <p style={{ color: "red" }}>{errors.Graduation.message}</p>}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Please enter your age",
              validate: {
                validAge: (age) =>
                  (age >= 18 && age <= 99) || "You must be between 18 and 99 years old"
              }
            })}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "The password is mandatory",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
                message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
              }
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
