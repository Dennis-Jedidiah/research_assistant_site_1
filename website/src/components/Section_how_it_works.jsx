import GridItem from "./ComponentParts/GridItem";
import { Goal, FolderClosed, Handshake, CheckCircle } from "lucide-react";

const HowitworksSection = () => {
  return (
    <div
      className="h-auto flex flex-col items-center justify-center py-15 px-25 bg-blue-100/40"
      id="How_it_works"
    >
      <div className="space-y-2 text-center">
        <div className="text-base text-blue-300">Here's what I offer</div>
        <div className="text-4xl">How it works</div>
      </div>

      <div className="text-center my-5 p-5 text-lg">
        Getting started doesn't have to be complicated. Whether you're choosing
        a university program, preparing for internships, building your resume,
        or planning your next academic step, we'll work through it together. The
        goal is simple: give you clear direction, practical advice, and a plan
        you can confidently follow.
      </div>
      <div className="grid grid-cols-2 gap-3 rounded-lg bg-white shadow-lg p-5 w-2/3 h-fit">
        <GridItem
          border={"bg-slate-100/60"}
          color={"bg-orange-100/70 text-orange-300"}
          icon={<Goal />}
          title={"Choose a goal"}
          body_text={
            "Pathway, major decision, internship / job prep, or scholarship portfolio."
          }
        />
        <GridItem
          border={"bg-slate-100/60"}
          color={"bg-green-100/70 text-green-300"}
          icon={<FolderClosed />}
          title={"Send materials"}
          body_text={
            "Resume (if you have one), posting/program link, transcript (optional), deadlines."
          }
        />
        <GridItem
          border={"bg-slate-100/60"}
          color={"bg-purple-100/70 text-purple-300"}
          icon={<Handshake />}
          title={"Meet + build"}
          body_text={
            "We rewrite, reorganize, and create a clear next-steps plan."
          }
        />
        <GridItem
          border={"bg-slate-100/60"}
          color={"bg-rose-100/70 text-rose-300"}
          icon={<CheckCircle />}
          title={"Deliverables"}
          body_text={"You leave with polished docs + a roadmap you can follow."}
        />
      </div>
    </div>
  );
};

export default HowitworksSection;
