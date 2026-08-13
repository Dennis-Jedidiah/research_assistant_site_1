import PackageCard from "./ComponentParts/PackageCard";
import VerticalDivider from "./ComponentParts/VerticalLine";

const Packages = () => {
  const highSchoolList = [
    "90-min consult (student + parent optional)",
    "Course & prerequisite map",
    "Target program options + backup paths",
    "Extracurricular strategy (what to do next)",
    "Written follow-up notes",
  ];

  const careerStudio = [
    "Resume 101 (ATS-ready) + 1 revision round",
    "LinkedIn 101 optimization",
    "60-min mock interview + feedback",
    "Personal roadmap: what to apply for + next steps",
  ];

  const applicationAccelerator = [
    "Resume 101 + LinkedIn 101",
    "Scholarship/portfolio positioning",
    "2 essay revisions (or 1 long essay)",
    "Interview 101: frameworks + practice",
    "Custom 'story bank' (your best examples)",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-15 px-25 bg-custom-blue-100/50"
      id="packages"
    >
      <div className="text-center p-5">
        <div className="text-center pb-5">
          <div className="text-4xl">Packages</div>
        </div>
        <p>
          Bundles are the best value if you want a full “101 → ready to apply”
          transformation.
        </p>
        <p>
          Tip: If you’re in Grade 11–12, start with Pathway Starter first, then
          add One-Stop Career Studio when you’re applying.
        </p>
      </div>
      <div className="my-5 flex justify-between w-fit mx-25">
        <PackageCard
          width="w-5/16"
          title={"Pathway Starter (HS)"}
          price={"$220 CAD"}
          body_text={`For high school students who need direction and a plan.`}
          package_list={highSchoolList}
        />
        <PackageCard
          width="w-5/16"
          title={"One-Stop Career Studio"}
          price={"$350 CAD"}
          body_text={`Perfect for internships, summer jobs, and early-career roles.`}
          package_list={careerStudio}
        />
        <PackageCard
          width="w-5/16"
          title={"Application Accelerator"}
          price={"$450 CAD"}
          body_text={`For scholarships, competitive programs, and big application cycles.`}
          package_list={applicationAccelerator}
        />
      </div>
    </div>
  );
};

export default Packages;
