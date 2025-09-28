import { Button } from "../ui/button";
import { ShadowCard } from "../ui/card-shadow";

const HowItWorksSection = () => {
    const steps = [
        {
          number: 1,
          title: "Download The Grass App",
          description: "Get the app to start earning. Log in and let Grass do the rest",
          hasButton: true,
          backgroundColor: "bg-green-100"
        },
        {
          number: 2,
          title: "Create An Account", 
          description: "Sign into your Grass account to start earning rewards",
          hasButton: false,
          backgroundColor: ""
        },
        {
          number: 3,
          title: "Earn",
          description: "Earn rewards for sharing your unused internet",
          hasButton: false,
          backgroundColor: ""
        }
      ];
    
      return (
        <section className="py-16 md:py-24">
        <div className="w-[80%] mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            How To Get Started
          </h2>
  
          {/* Steps Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main card (step 1) */}
            <ShadowCard 
              shadow="bottom-right" 
              className="bg-lime-200 p-8 min-h-[280px] flex flex-col justify-between rounded-[50px]"
            >
              <div>
                <div className="relative mb-6">
                  <ShadowCard shadow="bottom-right" className="w-10 h-10 bg-lime-400 rounded-full items-center justify-center font-bold text-black text-sm inline-flex p-0">
                    {steps[0].number}
                  </ShadowCard>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {steps[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {steps[0].description}
                </p>
              </div>
              <div>
                <Button
                  title="DOWNLOAD GRASS"
                  variant="green"
                  className=""
                />
              </div>
            </ShadowCard>
  
            {/* Right column with steps 2 and 3 */}
            <div className="flex flex-col gap-6">
              {steps.slice(1).map((step, index) => (
                <ShadowCard 
                  key={index + 1}
                  shadow="bottom" 
                  className="p-8 min-h-[130px] flex items-start gap-4 rounded-[50px]"
                >
                  <div className="flex-shrink-0">
                    <ShadowCard shadow="bottom-right" className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center font-bold text-black text-sm p-0">
                      {step.number}
                    </ShadowCard>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ShadowCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      );
}

export default HowItWorksSection;
