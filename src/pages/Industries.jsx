import { Factory, BatteryCharging, Warehouse, Building, Pill, Cpu, HeartPulse, Server } from 'lucide-react';
import './Industries.css';

export default function Industries() {
  const industries = [
    { title: "Automobile Manufacturing", icon: <Factory size={40} /> },
    { title: "EV Battery & Energy Storage", icon: <BatteryCharging size={40} /> },
    { title: "Warehouses & Logistics Parks", icon: <Warehouse size={40} /> },
    { title: "Commercial Buildings", icon: <Building size={40} /> },
    { title: "Pharmaceutical & Life Sciences", icon: <Pill size={40} /> },
    { title: "Industrial & Manufacturing", icon: <Cpu size={40} /> },
    { title: "Healthcare Facilities", icon: <HeartPulse size={40} /> },
    { title: "Data Centers & IT Parks", icon: <Server size={40} /> }
  ];

  return (
    <div className="industries-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Industries We Serve</h1>
          <p className="page-subtitle">Providing robust MEPF infrastructure for diverse sectors.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-4">
            {industries.map((industry, index) => (
              <div key={index} className="elevated-card industry-card text-center">
                <div className="industry-icon-wrapper">
                  {industry.icon}
                </div>
                <h3>{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
