import SoloCard from "./ComponentParts/SoloCard";
import SoloCardRow from "./ComponentParts/SoloCardRow";

const SoloServices = () => {
  const highSchoolPathway101 = [
    "Course/prerequisite check",
    "Timeline for Grade 11–12",
    "Practical 'what to do next' list",
  ];
  const majorProgramMatch101 = [
    "Major/minor strategy",
    "Career outcomes + options",
    "Gap analysis + action plan",
  ];
  const genZResume101 = [
    "Impact bullets (STAR-style)",
    "Cleaner formatting",
    "Keyword guidance for target roles",
  ];
  const linkedIn101 = [
    "Headline + About rewrite",
    "Experience wording + keywords",
    "Featured section + settings checklist",
  ];
  const interview101 = [
    "Answer frameworks",
    "Confidence + delivery feedback",
    "Common questions practice",
  ];
  const scholarshipEssay101 = [
    "Theme + positioning",
    "Activity descriptions that land",
    "Editing for clarity + impact",
  ];
  return (
    <div
      className="h-auto flex flex-col items-center justify-center py-15 px-25"
      id="solo_services"
    >
      <div className="space-y-2 text-center">
        <div className="text-4xl">Solo Services</div>
      </div>
      <div className="text-center my-5 p-5 text-lg">
        One focused service at a time. Great for quick wins.
      </div>
      <div className="grid grid-cols-3 gap-3">
        <SoloCard
          title={"High School Pathway 101"}
          subtitle={"60 minutes • course planning + next steps"}
          price={"$80"}
          border={"shadow-md rounded-lg"}
          body_text={highSchoolPathway101}
        />
        <SoloCard
          title={"Major & Program Match 101"}
          subtitle={"90 minutes • pick a path confidently"}
          price={"$150"}
          border={"shadow-md rounded-lg"}
          body_text={majorProgramMatch101}
        />
        <SoloCard
          title={"Gen Z Resume 101"}
          subtitle={"Rewrite + structure • ATS-friendly"}
          price={"$120"}
          border={"shadow-md rounded-lg"}
          body_text={genZResume101}
        />
        <SoloCard
          title={"LinkedIn 101"}
          subtitle={"Profile upgrade • recruiter-readable"}
          price={"$100"}
          border={"shadow-md rounded-lg"}
          body_text={linkedIn101}
        />
        <SoloCard
          title={"Interview 101"}
          subtitle={"60 minutes • mock + coaching"}
          price={"$90"}
          border={"shadow-md rounded-lg"}
          body_text={interview101}
        />
        <SoloCard
          title={"Scholarship / Portfolio 101"}
          subtitle={"Narrative + structure"}
          price={"$130"}
          border={"shadow-md rounded-lg"}
          body_text={scholarshipEssay101}
        />
      </div>
      <span className="my-4 py-2 text-lg font-semibold">Add-ons</span>
      <div className="grid grid-cols-4 gap-3 w-8/10">
        <SoloCardRow border="items-center rounded-md shadow-md" title={"Extra revision round"} price={"$40"}/>
        <SoloCardRow border="items-center rounded-md shadow-md" title={"Cover letter (targeted)"} price={"$60"}/>
        <SoloCardRow border="items-center rounded-md shadow-md" title={"Networking scripts (email/LinkedIn)"} price={"$35"}/>
        <SoloCardRow border="items-center rounded-md shadow-md" title={"Second mock interview"} price={"$75"}/>
      </div>
    </div>
  );
};

export default SoloServices;
