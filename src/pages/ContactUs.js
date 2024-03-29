import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Footer from "../components/global/Footer";
import { createResponses } from "../firebase/data/data.util";

export default function ContactUs() {
  var submit = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (!name) {
      toast.error("Name is required");
      return;
    } else if (!email) {
      toast.error("Email is required");
      return;
    } else if (!message) {
      toast.error("Message is required");
      return;
    }
    createResponses({ name, email, message }, "responses").then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Response Submitted Successfully");
      }
    });
  };
  useEffect(() => {
    document.title = "Contact Us | IshanSingla's Portfolio";

    document.getElementById("submitbutton").addEventListener("click", submit);
  }, []);
  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        Contact Us
      </h2>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        <h3 className="text-4xl">
          <span className="text-gray-lite dark:text-[#A6A6A6]">
            I'm always open to discussing product
          </span>
          <br />
          <span className="font-semibold dark:text-white">
            design work or partnerships.
          </span>
        </h3>
        <div
          className="returnmessage"
          data-success="Your message has been received, We will contact you soon."
        ></div>
        <div className="empty_notice">
          <span>Please Fill Required Fields</span>
        </div>

        <div className="relative z-0 w-full mt-[40px] mb-8 group">
          <input
            type="text"
            id="name"
            name="name"
            className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required={true}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Name *
          </label>
        </div>

        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="email"
            className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
            placeholder=" "
            id="email"
            required={true}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email *
          </label>
        </div>

        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="message"
            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
            placeholder=" "
            id="message"
            required={true}
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Message *
          </label>
        </div>

        <button
          // onClick={submit}
          id="submitbutton"
          className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
        >
          Submit
        </button>
      </div>

      <Footer />
    </div>
  );
}
