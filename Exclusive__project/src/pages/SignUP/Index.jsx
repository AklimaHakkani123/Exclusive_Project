import React from "react";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div className="my-20">
      <div className="bg-white container mx-auto px-4">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Image Section */}
          <section className="relative flex h-48 sm:h-72 md:h-96 lg:h-full items-end bg-gray-900 lg:col-span-5 xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12 z-10">
              <a className="block text-white mb-8" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 ..."
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Welcome to Squid 🦑
              </h2>
              <p className="mt-4 max-w-sm text-white/90 leading-relaxed text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          {/* Right Form Section */}
          <main className="flex items-center justify-center px-6 py-10 sm:px-10 lg:col-span-7 xl:col-span-6">
            <div className="w-full max-w-xl">
              {/* For Mobile */}
              <div className="relative -mt-10 block lg:hidden text-center">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 ..."
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                  Welcome to Squid 🦑
                </h1>
                <p className="mt-3 text-gray-500 leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              {/* Sign Up Form */}
              <form action="#" className="mt-10 grid grid-cols-6 gap-6">
                {/* First Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                {/* Confirm Password */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="col-span-6">
                  <label
                    htmlFor="MarketingAccept"
                    className="flex items-start gap-3"
                  >
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="mt-1 size-5 rounded-md border-gray-300 text-red-500 focus:ring-red-400"
                    />
                    <span className="text-sm text-gray-700 leading-snug">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                {/* Terms */}
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-red-500 underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-red-500 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="button"
                    className="inline-block shrink-0 rounded-md bg-redDB4444 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-red-500 font-medium hover:underline"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
