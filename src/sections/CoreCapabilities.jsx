const Core_capabilities = () => {
    return ( 
        <div className="lg:col-span-4 lg:px-12 lg:py-8 lg:flex lg:flex-col lg:items-center col-span-4 px-4 py-2">
            <h2 className="text-4xl font-heading font-[350] text-center my-4">Core Capabilites</h2>
            <div className="flex flex-col">
                <div className="mb-2">
                    <h3 className="text-2xl font-heading font-[350] my-2">Enterprise Modernization</h3>
                    <ul className="list-disc list-inside">
                        <li>Legacy decommissioning (e.g., AS400)</li>
                        <li>Cloud-first architecture</li>
                        <li>Operating model + governance</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="text-2xl font-heading font-[350] my-2">Cybersecurity & Risk</h3>
                    <ul className="list-disc list-inside">
                        <li>Incident response leadership</li>
                        <li>MFA/IAM, Zero Trust patterns</li>
                        <li>BCP/DR/CIRP</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="text-2xl font-heading font-[350] my-2">ERP & Integrations</h3>
                    <ul className="list-disc list-inside">
                        <li>Oracle Cloud, SAP advisory</li>
                        <li>SOA/microservices</li>
                        <li>Secure APIs + interoperability</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="text-2xl font-heading font-[350] my-2">Data & AI Enablement</h3>
                    <ul className="list-disc list-inside">
                        <li>Data migration + warehousing</li>
                        <li>Analytics foundations</li>
                        <li>Responsible innovation governance</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Core_capabilities;