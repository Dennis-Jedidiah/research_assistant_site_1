import TextInput from "./ComponentParts/TextInput";

const BookASession = () => {
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
        <h3 className="text-2xl font-bold text-custom-blue-500">What to prepare</h3>
        <ul className="list-disc list-inside">
          {applicationMaterials.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold text-custom-blue-500">Policies (simple)</h3>
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
        <div className="text-lg drop-shadow-xl/10 rounded-lg text-black">
          <form action="https://formsubmit.co/da9f18cf33c8600364a1538c53ca6945" method="POST" className="flex flex-col gap-3 ">
            <input type="hidden" name="_next" value=""></input>
            <label htmlFor="">Your name</label>
            <TextInput name={"name"} placeholder={"your name"} />
            <label htmlFor="">Email</label>
            <TextInput name={"email"} _replyto placeholder={"you@email.com"} />
            <label htmlFor="">Service</label>
            <select
              className="px-3 py-1 rounded-lg placeholder:text-custom-blue-300 bg-custom-white-100 text-custom-blue-300"
              name="service"
            >
              <option value="">Select a service</option>
              <option value="resume">Resume 101</option>
              <option value="linkedin">LinkedIn 101</option>
              <option value="interview">Interview 101</option>
            </select>
            <label htmlFor="">
              Notes (goals, target program/role, deadlines)
            </label>
            <textarea
              name="notes"
              placeholder="Tell me what you're aiming for or any deadlines."
              className="border-1 border-custom-white-200 px-3 py-1 rounded-lg placeholder:text-custom-blue-300 bg-custom-white-100 h-35"
            />
            <div className="flex items-center gap-3">
              <input type="checkbox" name="contact_agreement" id="" />
              <label htmlFor="contact_agreement">
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
