import { useState, useEffect } from "react";
import { useBookingContext } from "../functions/context/BookingContext";

const Contact_section = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [packageValue, setPackageValue] = useState("");
  const { selectedPackage } = useBookingContext();

  const [syncedPackage, setSyncedPackage] = useState(selectedPackage);
  if (selectedPackage !== syncedPackage) {
    setSyncedPackage(selectedPackage);
    if (selectedPackage) {
      setPackageValue(selectedPackage);
    }
  }

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
      }).then(setShowSuccessAlert(true));
    }
  };

  return (
    <div
      id="contact"
      className="lg:flex lg:flex-col lg:items-center lg:col-span-12 lg:px-12 lg:py-8 bg-verdigris-700/8 col-span-4 px-4 py-2 mt-4"
    >
      <h2 className="text-4xl font-heading font-[350] text-center my-4">
        Book A Session!
      </h2>
      {showSuccessAlert && (
        <div className="lg:w-2/3 w-full bg-verdigris-600 text-white px-4 py-3 rounded-lg mb-4 text-center font-semibold">
          Form submitted successfully! We'll be in touch soon.
        </div>
      )}
      <form
        action={"https://formsubmit.co/9b7dc09472329be01954bc42535785da"}
        method="POST"
        className="lg:w-2/3 lg:mx-4 bg-white drop-shadow-xl  rounded-xl p-3"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="_next" value={window.location.href} />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="New submission from the website!"
        />
        <fieldset className="flex flex-col my-2">
          <label className="text-porcelain-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-md border-[0.5px] border-porcelain-600 bg-white px-2 py-1"
            placeholder="Name"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col my-2">
          <label className="text-porcelain-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md border-[0.5px] border-porcelain-600 px-2 py-1"
            placeholder="Email"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col my-2">
          <label className="text-porcelain-700 mb-1" htmlFor="package_name">
            Packages
          </label>
          <select
            id="package_name"
            name="package_name"
            value={packageValue}
            onChange={(e) => setPackageValue(e.target.value)}
            className="border-[0.5px] border-porcelain-600 rounded-md px-2 py-1"
            required
          >
            <option value="" disabled hidden>
              Select a package
            </option>
            <option value="IT Health Check 101">IT Health Check 101</option>
            <option value="Cloud Migration Starter 101">
              Cloud Migration Starter 101
            </option>
            <option value="Cyber Readiness 101">Cyber Readiness 101</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col my-2">
          <label className="text-porcelain-700 mb-1" htmlFor="notes">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            className="rounded-md border-[0.5px] border-porcelain-600 px-2 py-1 h-24"
            placeholder="Notes"
          />
        </fieldset>
        <fieldset className="flex items-center gap-1">
          <input
            type="checkbox"
            name="contact_agreement"
            id="contact_agreement"
            required
          />
          <label
            htmlFor="contact_agreement"
            className="text-sm text-porcelain-700"
          >
            I agree to be contacted about this request.
          </label>
        </fieldset>
        <button
          className="w-full rounded-md bg-verdigris-200 text-center p-1 my-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact_section;
