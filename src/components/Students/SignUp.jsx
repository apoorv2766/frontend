import React, { useState } from "react";

const SignUp = () => {
  let [studentData, setStudentData] = useState({});
  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(value, name);
    setStudentData({ ...studentData, [name]: value });
    // console.log(studentData);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let { fname, lname, age, gender, email, mobile, password } = studentData;
    if (!fname || !lname || !age || !gender || !email || !mobile || !password) {
      alert("Please fill all the fields below");
    } else {
      let res = await fetch("http://127.0.0.2:2766/student/signup", {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "application/json" },
      });
      let result = await res.json();
      console.log(result);
      if (result.msg) {
        alert(result.msg);
      } else {
        localStorage.setItem("token", JSON.stringify(result.token));
      }
    }
  };

  return (
    <section className="">
      <div className="flex justify-center bg-studentSignup mx-auto lg:py-0  ">
        <div
          className="rounded-lg shadow w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800
           dark:border-gray-700"
        >
          <div className=" bg-gray-200 bg-studentSignup  space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Create Account Here
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={onSubmitHandler}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium 
                           text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="email"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                            block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900
                          text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="email"
                  className="bg-gray-50 border
                            border-gray-300
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                              block w-full
                              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900
                       text-white"
                >
                  Age
                </label>
                <input
                  type="date"
                  name="age"
                  id="email"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                            block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div className="">
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900
                     text-white"
                >
                  Gender
                </label>
                <span className="text-white">Male</span>
                <input
                  type="radio"
                  name="gender"
                  id="email"
                  value="male"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-3"
                  placeholder="name@company.com"
                  onChange={onChangeHandler}
                />
                <span className="text-white">Female</span>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                          m-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={onChangeHandler}
                />
                <span className="text-white">Others</span>
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                           m-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900
                      text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                            block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900
                     text-white"
                >
                  SID
                </label>
                <input
                  type="text"
                  name="sID"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                            block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900
                          text-white"
                >
                  Mobile
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="email"
                  className="bg-gray-50 border
                           border-gray-300
                           text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                            block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900
                        text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                          text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900
                     text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                          sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-start"></div>
              <button
                className="w-full text-black bg-primary-600 hover:bg-primary-700
                       focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm 
                       px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Create Your Account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  +SignUp Here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
