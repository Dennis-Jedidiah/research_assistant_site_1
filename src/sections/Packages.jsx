import PriceCard from "../components/PriceCard";

const Pacakges = () => {
  return (
    <div id="packages" className="lg:col-span-8 lg:px-12 lg:py-8 col-span-4 px-4 py-2">
      <h2 className="text-4xl font-heading font-[350] text-center my-4">
        Packages
      </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ullam
        totam obcaecati, sed consectetur voluptatum pariatur ipsum debitis aut.
      </p>
      <div className="lg:grid lg:grid-cols-8 lg:gap-4">
        <PriceCard
          title={"IT Health Check 101"}
          price={"$1,950"}
          desc={"A fast, executive-ready assessment with a prioritized plan."}
          listItems={[
            "Discovery (90 min) + document review",
            "Security, infrastructure, and application overview",
            "Top risks + quick wins (30/60/90 days)",
            "Deliverable: 8–12 page report + roadmap",
          ]}
        />
        <PriceCard
          title={"Cloud Migration Starter 101"}
          price={"$4,500"}
          desc={"Plan and de-risk your first migration wave."}
          listItems={[
            "Workload selection + readiness",
            "Target architecture (Azure/AWS)",
            "Security baseline + IAM/MFA plan",
            "Deliverable: migration plan + effort estimate",
          ]}
        />
        <PriceCard
          title={"Cyber Readiness 101"}
          price={"$3,250"}
          desc={"Incident response prep + practical control improvements."}
          listItems={[
            "Threat/risk workshop",
            "IR playbook outline (CIRP) + tabletop",
            "MFA/IAM + logging recommendations",
            "Deliverable: readiness package + next steps",
          ]}
        />
      </div>
    </div>
  );
};

export default Pacakges;
