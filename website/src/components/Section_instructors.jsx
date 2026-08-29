import dr_zaidi from "../assets/dr_zaidi.jpg";

const InstructorSection = () => {
  return (
    <div
      className="flex flex-col items-center lg:items-stretch bg-custom-blue-100/50 px-5 py-5 w-full max-h-screen lg:justify-center lg:px-25 lg:flex-row lg:py-15"
      id="meet_instructor"
    >
      <div className="order-2 flex flex-col overflow-hidden bg-custom-white-100 drop-shadow-xl/10 rounded-tl-2xl rounded-bl-2xl lg:order-1 lg:w-8/12 lg:p-10">
        <span className=" lg:self-center">
          <div className="text-4xl pb-5">Meet your Instructor</div>
          <p>
            Strategic, community-driven academic leader with 20+ years of
            experience advancing research excellence, partnership development,
            and student-centred learning across education. Accomplished scholar
            with a nationally recognized mixed-methods research program on
            migration, race, Islamophobia, gender, and systemic inequality,
            supported by multiple SSHRC grants.
          </p>
          <p>
            My unique pairing of qualitative and quantitative methodological
            expertise, combined with intersectional theoretical frameworks,
            enables me to generate rigorous evidence, nuanced analysis, and
            actionable insights that inform school and workplace strategy and
            community impact. Proven record of initiating and stewarding
            high-impact partnerships across government, community agencies,
            school boards, and industry to strengthen regional engagement and
            school and workplace impact.
          </p>
          <p>
            With service on key tenure and promotion committees, academic
            appeals, graduate governance, sexual-violence advisory bodies, and
            national SSHRC panels, I bring a proven record of strategic
            leadership, sound judgment, and institution-wide collaboration.
            Career Studio 101 translates this expertise into practical coaching
            for students and early-career adults — with clear steps, strong
            writing, and confidence-building support.
          </p>
        </span>
      </div>
      <img
        src={dr_zaidi}
        className="order-1 object-cover w-full lg:object-center lg:h-full lg:rounded-tr-2xl lg:rounded-br-2xl lg:w-4/12 lg:drop-shadow-xl/10 lg:order-2"
      />
    </div>
  );
};

export default InstructorSection;
