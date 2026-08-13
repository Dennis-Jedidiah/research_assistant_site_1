import SoloCard from "./ComponentParts/SoloCard";
import TextInput from "./ComponentParts/TextInput";
import SolidButton from "./ComponentParts/Button_solid";

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
      className="flex items-start justify-center px-25 py-15 bg-custom-blue-100/50 gap-4"
      id="book_a_session"
    >
      <div className="flex flex-col bg-white p-5 rounded-2xl basis-4/7">
        <div className="space-y-2 text-left">
          <div className="text-3xl pb-5">Book A Session</div>
        </div>
        <div className="text-lg drop-shadow-xl/10 rounded-lg">
          <form action="" className="flex flex-col gap-3 ">
            <label htmlFor="">Your name</label>
            <TextInput name={"name"} placeholder={"your name"} />
            <label htmlFor="">Email</label>
            <TextInput name={"email"} placeholder={"you@email.com"} />
            <label htmlFor="">Service</label>
            <select
              className="border-1 border-gray-300 px-3 py-1 rounded-lg placeholder:text-gray-300"
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
              className="border-1 border-gray-300 px-3 py-1 rounded-md placeholder:text-gray-300 h-50"
            />
            <div className="flex items-center gap-3">
              <input type="checkbox" name="contact_agreement" id="" />
              <label htmlFor="contact_agreement">
                I agree to be contacted about this request.
              </label>
            </div>
            <SolidButton children={"Submit"} type={"submit"} />
          </form>
        </div>
      </div>
      <div className="basis-3/7 flex flex-col gap-4">
        <SoloCard
          title={"What to prepare"}
          title_color={"text-xl text-rose-700/50"}
          body_text={applicationMaterials}
          border={"bg-white shadow-lg rounded-lg py-8"}
        />
        <SoloCard
          title={"Policies (simple)"}
          title_color={"text-xl text-rose-700/50"}
          body_text={policiesAndNotes}
          border={"bg-white shadow-lg rounded-lg py-8"}
        />
      </div>
    </div>
  );
};

export default BookASession;
