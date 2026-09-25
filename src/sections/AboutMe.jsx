const About_me = () => {
  return (
    <div
      id="about"
      className="lg:flex lg:flex-row lg:gap-4 lg:col-span-12 lg:px-12 lg:py-8 bg-verdigris-700/8 col-span-4 px-4 py-2"
    >
      <div className="lg:flex lg:flex-col lg:basis-3/5 lg:px-10 lg:py-5">
          <h2 className="text-4xl font-heading font-[350] text-center my-4">
            About me
          </h2>
          <h3 className="hidden lg:block lg:text-porcelain-600 lg:text-xl lg:font-normal lg:mb-4">
            Sid Naqvi - IT Consultant
          </h3>
        <p className="">
          Strategic technology executive with 20+ years modernizing enterprise
          ecosystems, integrating complex systems, and leading cybersecurity and
          cloud transformations. Strengths include ERP/HCM optimization (Oracle
          Cloud, SAP), SOA/microservices, secure API development, large-scale
          data migration and warehousing, and governance aligned to privacy and
          accessibility requirements.
        </p>
        <a href="https://www.linkedin.com/in/sid-naqvi/" className="my-4 text-porcelain-500">My LinkedIn</a>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfa4xsCaQMKbhyVRenUojgKPypR0q85rJ6WwjS3Urgnw&s=10"
        className="lg:order-first lg:basis-2/5 lg:size-125 object-cover object-top my-3 drop-shadow-xl/60 rounded-xl overflow-hidden"
      />
    </div>
  );
};

export default About_me;
