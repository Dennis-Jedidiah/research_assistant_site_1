import { useState, useEffect } from "react";
import TextInput from "./ComponentParts/TextInput";
import { getBookingContext } from "../functions/context/BookingContext";

const BookASession = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const { selectedPackage } = getBookingContext();

  useEffect(() => {
    if (selectedPackage) {
      setServiceValue(selectedPackage);
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const formData = new FormData(e.target);
      fetch(e.target.action, {
        method: "POST",
        body: formData,
      });
      setShowSuccessAlert(true);
    }
  };

  const applicationMaterials = [
    "Current resume (even if messy)",
    "Job posting or program link",
    "Transcript (optional)",
    "Deadlines + goals",
  ];
  const policiesAndNotes = [
    "24-hour reschedule policy",
    "1 revision round included where noted",
    "Student-friendly, respectful coaching",
  ];
  return (
    <div
      className="flex items-start justify-center px-25 py-15 bg-custom-blue-100/50 gap-4 items-stretch"
      id="book_a_session"
    >
      <div className="flex flex-col justify-center gap-4 basis-4/8">
        <h1 className="text-6xl font-bold heading-font text-custom-black-500">
          Book a session with me
        </h1>
        <p className="text-lg font-light text-custom-black-500">
          I offer 1:1 coaching sessions for students and early career
          professionals. Sessions are 30-60 minutes long, and can be done via
          Zoom or Google Meet.
        </p>
        <h3 className="text-2xl font-bold text-custom-blue-500">
          What to prepare
        </h3>
        <ul className="list-disc list-inside">
          {applicationMaterials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold text-custom-blue-500">
          Policies (simple)
        </h3>
        <ul className="list-disc list-inside">
          {policiesAndNotes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col bg-custom-blue-500 p-5 rounded-2xl basis-4/8 text-white">
        <div className="space-y-2 text-left">
          <div className="text-3xl pb-5">Book A Session</div>
        </div>
        {showSuccessAlert && (
          <div className="bg-custom-green-500 text-white px-4 py-3 rounded-lg mb-4 text-center font-semibold">
            Form submitted successfully! We'll be in touch soon.
          </div>
        )}
        <div className="text-lg drop-shadow-xl/10 rounded-lg text-black">
          <form
            action="https://formsubmit.co/9b7dc09472329be01954bc42535785da"
            method="POST"
            className="flex flex-col gap-3 "
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New submission from the website!"
            />
            <input type="hidden" name="_replyto" value="email" />
            <label htmlFor="">Your name</label>
            <TextInput name={"name"} placeholder={"your name"} required/>
            <label htmlFor="">Email</label>
            <TextInput name={"email"} placeholder={"you@email.com"} required/>
            <label htmlFor="">Service</label>
            <select
              value={serviceValue}
              onChange={(e) => setServiceValue(e.target.value)}
              className="px-3 py-1 rounded-lg bg-custom-white-100 text-black"
              name="service"
              required
            >
              <option
                value=""
                className="text-custom-blue-300"
                disabled
                defaultValue
                hidden
              >
                {" "}
                Select a service / Package{" "}
              </option>
              <option value="pathway starter package">
                Package - Pathway Starter (HS)
              </option>
              <option value="One-Stop Career Studio">Package - One-Stop Career Studio</option>
              <option value="Application Accelerator">
                Package - Application Accelerator
              </option>
              <option value="resume">Resume 101</option>
              <option value="linkedin">LinkedIn 101</option>
              <option value="interview">Interview 101</option>
              <option value="program match">Program Match 101</option>
              <option value="HS pathway">High School Pathway 101</option>
              <option value="scholarship/portfolio">
                Scholarship/Portfolio 101
              </option>
            </select>
            <label htmlFor="">
              Notes (goals, target program/role, deadlines)
            </label>
            <textarea
              required
              name="notes"
              placeholder="Tell me what you're aiming for or any deadlines."
              className="border-1 border-custom-white-200 px-3 py-1 rounded-lg placeholder:text-custom-blue-300 bg-custom-white-100 h-35"
            />
            <div className="flex items-center gap-3">
              <input type="checkbox" name="contact_agreement" id="" required/>
              <label
                htmlFor="contact_agreement"
                className="text-sm text-custom-white-200 text-outline"
              >
                I agree to be contacted about this request.
              </label>
            </div>
            <button
              className={`border-2 border-custom-white-500 rounded-lg bg-custom-white-500 text-black px-2 py-1 hover:cursor-pointer`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookASession;
