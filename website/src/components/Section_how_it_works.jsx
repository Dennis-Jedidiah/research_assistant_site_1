import GridItem from "./ComponentParts/GridItem";
import { Goal, FolderClosed, Handshake, CheckCircle } from "lucide-react";

const HowitworksSection = () => {
  return (
    <div
      className="h-auto flex flex-row items-stretch items-center justify-center py-15 px-25"
      id="How_it_works"
    >
      <div className="flex flex-col justify-center w-3/4 p-5">
        <div className="pb-5" id="How_it_works_header">
          <div className="text-base text-custom-blue-400">
            Here's what I offer
          </div>
          <div className="text-4xl">How it works</div>
        </div>
        <p>
          Getting started doesn't have to be complicated. Whether you're
          choosing a university program, preparing for internships, building
          your resume, or planning your next academic step, we'll work through
          it together. The goal is simple: give you clear direction, practical
          advice, and a plan you can confidently follow.
        </p>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 gap-3 p-5 h-fit">
        <GridItem
          border={"bg-orange-100/80 col-span-12 row-span-1"}
          color={"text-orange-300"}
          icon={<Goal />}
          title={"Choose a goal"}
          body_text={
            "Pathway, major decision, internship / job prep, or scholarship portfolio."
          }
        />
        <GridItem
          border={"bg-green-100/80 col-span-6 row-span-2"}
          color={"text-green-300"}
          icon={<FolderClosed />}
          title={"Send materials"}
          body_text={
            <ul className="list-disc list-outside pl-5">
              <li>Resume (if you have one)</li>
              <li>Posting/program link</li>
              <li>Transcript (optional)</li>
              <li>Deadlines</li>
            </ul>
          }
        />
        <GridItem
          border={"bg-purple-100/80 col-span-6 row-span-1"}
          color={"text-purple-300"}
          icon={<Handshake />}
          title={"Meet + build"}
          body_text={
            "We rewrite, reorganize, and create a clear next-steps plan."
          }
        />
        <GridItem
          border={"bg-rose-100/80 col-span-6 row-span-1"}
          color={"text-rose-300"}
          icon={<CheckCircle />}
          title={"Deliverables"}
          body_text={
            "You leave with polished docs + a roadmap you can follow."
          }
        />
      </div>
    </div>
  );
};

export default HowitworksSection;
