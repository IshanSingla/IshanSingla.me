/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  onAuthStateChangedListener,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/auth/auth.util";

export default function Auth() {
  let navigate = useNavigate();
  var signin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email) {
      toast.error("Email is required");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    try {
      signInAuthUserWithEmailAndPassword(email, password)
        .then((user) => {
          if (user) {
            navigate("/Admin");
            toast.success("User Logged In Successfully");
            return;
          }
        })
        .catch((error) => {
          if (error.code === "auth/user-disabled") {
            toast.error("User has been disabled");
          } else if (error.code === "auth/user-not-found") {
            toast.error("User not found");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Wrong Password");
          } else {
            toast.error(error.message);
          }
        });
    } catch (error) {
      alert(error);
    }
  };
  onAuthStateChangedListener((user) => {
    if (user) {
      navigate("/Admin");
      toast.success("User Logged In Successfully");
      return;
    }
  });
  var google = async (e) => {
    e.preventDefault();
    try {
      signInWithGoogle();
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    document.title = "Login | Admin Panel | IshanSingla's Portfolio";
  }, []);
  return (
    <div className="overflow-hidden">
      <section className="w-screen h-screen">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="flex flex-col justify-center items-center w-full mt-[2rem]">
            <Link className="flex justify-center items-center" to="/">
              <h1 className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl  font-medium">
                LOG IN
              </h1>
            </Link>
            <div className="flex flex-col justify-center items-center h-full w-full p-6">
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2 w-min">
                    <div className="w-min">
                      <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4">
                        Email
                      </label>
                    </div>
                    <input
                      type="text"
                      id="email"
                      placeholder="email"
                      required
                      className="border-[1px] border-black rounded-[5px] xxs:w-[16rem] xs:w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] h-12 p-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2">
                    <div className="w-min">
                      <label className="xxs:text-sm text-md flex justify-start items-start ">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="border-[1px] border-black rounded-[5px] xxs:w-[16rem] xs:w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] h-12 p-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={signin}
                    className="btn flex flex-row justify-center items-center bg-mainColor w-44 h-10 xs:w-44 xs:h-10 sm:w-48 sm:h-10 md:w-52 md:h-12 rounded-[8px]  text-xs sm:text-md p-4 text-center"
                  >
                    LOG IN
                  </button>
                  <button
                    onClick={google}
                    className="btn flex flex-row gap-2 border-black border-[1px] justify-center items-center w-44 h-10 xs:w-44 xs:h-10 sm:w-48 sm:h-10 md:w-52 md:h-12 rounded-[8px] text-xs sm:text-md p-4"
                  >
                    SIGN IN BY GOOGLE
                    <img src="" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="z-[1]">
          <img
            src={person}
            className="hidden sm:block absolute bottom-[2rem] sm:right-[2rem] md:right-[4rem] lg:right-[8rem] w-24 h-56 object-scale-down"
          />
          <img src={vectorright} className="absolute top-0 right-0 w-[15%]" />
          <img
            src={vectorleft}
            className="absolute top-[10rem] left-0 h-[10%] xs:h-[22%] sm:h-[36%]"
          />
          <img
            src={bottomvector}
            className="absolute bottom-0 left-[18rem] w-[25%] hidden xs:block"
          />
          <img
            src={vectorrect}
            className="absolute top-[15rem] right-0 rotate-180 h-[4%] sm:h-[8%]"
          />
          <img
            src={vectorrect}
            className="absolute bottom-[12rem] left-0  h-[4%] sm:h-[8%]"
          />
          <img
            src={vectorrect}
            className="absolute bottom-0 left-[12rem] rotate-[270deg] h-[4%] sm:h-[8%]"
          />
        </div> */}
      </section>
    </div>
  );
}
