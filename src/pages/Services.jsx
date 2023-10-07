import React from "react";
import servicepic1 from "../images/Rectangle 7.svg";
import servicepic2 from "../images/Rectangle 7 (1).svg";
import servicepic3 from "../images/Rectangle 7 (2).svg";

const Services = () => {
  return (
    <div className="bg-gradient-to-t from-[#f0efef]">
      <section id="services">
        <div className="container mx-auto p-4">
          <div className="text-center my-4">
            <h1 className="text-[#f0a202] mb-5">
              <b>Services</b>
            </h1>
            <h3>
              <b>Everyone Deserves Our Services</b>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 mb-32">
            <div className="bg-white h-[450px] rounded-lg md:w-2/5 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic1} alt="service1" />
              </div>
              <div className="p-4">
                <h4 className="text-center">
                  <b>Care of Senoirs</b>
                </h4>
                <p>
                  At Amazing Angels , we specialize in providing
                  compassionate care for seniors. Our caregivers are trained to
                  enhance independence and improve overall quality of life
                  through dedicated support and companionship.
                </p>
              </div>
            </div>
            <div className="bg-white h-[450px] rounded-lg md:w-2/5 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic2} alt="service2" />
              </div>
              <div className="p-4">
                <h4 className="text-center">
                  <b>Dementia</b>
                </h4>
                <p>
                  We excel in providing specialized care for individuals with
                  dementia. Our trained caregivers create a safe and stimulating
                  environment, offering patient and person-centered support to
                  maintain dignity and connection.
                </p>
              </div>
            </div>
            <div className="bg-white h-[450px] rounded-lg md:w-2/4 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic3} alt="service3" />
              </div>
              <div className="p-4">
                <h4 className="text-center">
                  <b>Mental Health</b>
                </h4>
                <p>
                  At Amazing Angels , is committed to supporting those facing
                  mental health challenges. Our caregivers provide empathetic
                  and non-judgmental care, working collaboratively with clients,
                  families, and professionals to promote emotional wellness at
                  home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
