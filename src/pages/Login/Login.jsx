import { Link, useLocation, useNavigate } from "react-router";
import signupImg from "../../assets/images/signup-bg.jpeg";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


const Login = () => {
  const { signInUser, setLoading, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setLoading(true);
      await signInUser(email, password);

      navigate(from);
      toast.success("Login Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  //handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover opacity-80 "
      style={{ backgroundImage: `url(${signupImg})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="my-16 ">
          <div className="bg-rose-300 md:min-w-lg  opacity-90  p-6 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5  ">
              <h2 className="text-white text-3xl font-bold text-center">
                Please SignUp
              </h2>

              <div className="text-white md:w-3/4 mx-auto">
                <label htmlFor="email" className="block mb-2 text-md">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="text-rose-500 w-full border-2 border-gray-200 rounded-md py-2 px-4
                         focus: outline-rose-200 mb-2"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="text-white md:w-3/4 mx-auto relative">
                <label htmlFor="password" className="block mb-2 text-md">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  placeholder="******"
                  className="text-rose-500 w-full border-2 border-gray-200  rounded-md py-2 px-4
                         focus: outline-rose-200 mb-2"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-11 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="md:w-3/4 mx-auto">
                <button
                  type="submit"
                  className="text-rose-500 w-full border-2 border-gray-200 rounded-md py-2 
                         bg-white px-4 cursor-pointer uppercase font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="space-y-1 md:w-3/4 mx-auto">
              <button
                className="text-center p-3 text-sm text-white hover:underline hover:text-rose-600 
            transition cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
            <hr className="md:w-3/4 mx-auto text-rose-400 md:mb-0" />
            <div className="my-5">
              <p className="text-center text-md text-white font-bold">
                Signup with Social Account
              </p>
              <button onClick={handleGoogleSignIn}
                className="flex justify-center items-center my-4 p-3 rounded-md border-3 cursor-pointer
             border-rose-700 md:w-2/4 mx-auto hover:bg-white hover:border-white transition"
              >
                <FcGoogle className="text-xl mr-2" />
                <p>Sign with Google</p>
              </button>

              <p className="text-left md:px-6 py-6 text-sm text-white">
                Don&apos;t have an account, Please{" "}
                <Link to="/signup" className="font-semibold text-blue-800">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
