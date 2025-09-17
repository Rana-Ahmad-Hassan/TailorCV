import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/auth/login.service";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: any = await loginUser(formData);
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center">
        {/* Left side - Hero content */}
        <div className="hidden text-white lg:block lg:w-1/2 pr-12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-400">
                Perfect Resume
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Create professional, eye-catching resumes that get you hired. Join
              thousands of successful professionals.
            </p>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="bg-green-950 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
            {/* Mobile brand header */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-2xl font-bold text-white">ResumeBuilder</h1>
              <p className="text-gray-200 mt-2">Create your perfect resume</p>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-green-900/40 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-green-900/40 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
              >
                Sign In
              </button>
            </form>

            {/* Links for account state */}
            <div className="mt-6 text-center text-gray-300">
              <p>
                Don’t have an account?{" "}
                <Link to="/sign-up" className="text-green-400 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
