import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks";

const SignInPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(signInThunk(data));
    reset();
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                value: /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                message: "Enter a correct email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Field is required" },
              minLength: { value: 8, message: "Minimum 8 characters" },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Sign In</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
};

export default SignInPage;
