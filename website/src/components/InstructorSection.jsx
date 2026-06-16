import dr_zaidi from "../assets/dr_zaidi.jpg";

const InstructorSection = () => {
  return (
    <div
      className="h-auto flex flex-col items-center justify-center p-15"
      id="meet_instructor"
    >
      <div className="space-y-2 text-center">
        <div className="text-4xl">Meet your Instructor</div>
      </div>
      <div className="flex mt-6 h-fit gap-10">
        <div className="w-8/12 p-10 text-lg flex h-fill bg-slate-100 drop-shadow-xl/10 rounded-lg">
          <span className="self-center">
            Strategic, community-driven academic leader with 20+ years of
            experience advancing research excellence, partnership development,
            and student-centred learning across education. Accomplished scholar
            with a nationally recognized mixed-methods research program on
            migration, race, Islamophobia, gender, and systemic inequality,
            supported by multiple SSHRC grants.<br/>
            My unique pairing of qualitative
            and quantitative methodological expertise, combined with
            intersectional theoretical frameworks, enables me to generate
            rigorous evidence, nuanced analysis, and actionable insights that
            inform school and workplace strategy and community impact. Proven
            record of initiating and stewarding high-impact partnerships across
            government, community agencies, school boards, and industry to
            strengthen regional engagement and school and workplace impact.<br/>
            With service on key tenure and promotion committees, academic appeals,
            graduate governance, sexual-violence advisory bodies, and national
            SSHRC panels, I bring a proven record of strategic leadership, sound
            judgment, and institution-wide collaboration. Career Studio 101
            translates this expertise into practical coaching for students and
            early-career adults — with clear steps, strong writing, and
            confidence-building support.
          </span>
        </div>
        <div className="w-4/12 bg-yellow-300 self-center drop-shadow-xl/10">
          <img
            src={dr_zaidi}
            className="object-center object-cover w-fit h-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
