import { Link } from "react-router";
import signupImg from "../../assets/images/signup-bg.jpeg";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"

const SignUp = () => {
  const {  register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  

  
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
                <label htmlFor="name" className="block mb-2 text-md">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="text-rose-500 w-full border-2 border-gray-200 rounded-md py-2 px-4
                           focus: outline-rose-200 mb-2"
                           {...register("name", { required: true })}
                />
                {errors.name && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              
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
                />
              </div>
              <div className="md:w-3/4 mx-auto">
                <label htmlFor="image" className="block mb-2 text-md text-white">
                  Select Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  className="text-rose-500 w-full border-2 border-gray-200 rounded-md py-2 px-4
               focus: outline-rose-200 mb-2"
                />
              </div>
              <div className="text-white md:w-3/4 mx-auto">
                <label htmlFor="password" className="block mb-2 text-md">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="******"
                  className="text-rose-500 w-full border-2 border-gray-200  rounded-md py-2 px-4
                           focus: outline-rose-200 mb-2"
                />
              </div>
              <div className="md:w-3/4 mx-auto">
                <button
                  type="submit"
                  className="text-rose-500 w-full border-2 border-gray-200 rounded-md py-2 
                           bg-white px-4 cursor-pointer uppercase font-semibold"
                >
                  SignUp
                </button>
              </div>
            </form>
            <hr className="md:w-3/4 mx-auto text-rose-400 md:mb-0" />
            <div className="my-5">
              <p className="text-center text-md text-white font-bold">
                Signup with Social Account
              </p>
              <div className="flex justify-center items-center my-4 p-3 rounded-md border-3
               border-rose-700 md:w-2/4 mx-auto hover:bg-white hover:border-white transition">
                <FcGoogle className="text-xl mr-2"/>
                <p>Sign with Google</p>
              </div>
              
              <p className="text-left md:px-6 py-6 text-sm text-white">Already have an account, Please 
                <Link to="/login" className="font-semibold text-blue-800"> Login</Link>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
