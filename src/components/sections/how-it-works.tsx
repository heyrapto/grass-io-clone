import { Button } from "../ui/button";
import { ShadowCard } from "../ui/card-shadow";

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="w-[80%] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          How To Get Started
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <ShadowCard shadow="bottom-right" className="bg-green-100">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Download The Grass App
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Get the app to start earning. Log in and let Grass do the rest.
                </p>
                <Button
                  title="DOWNLOAD GRASS"
                  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium text-sm"
                />
              </div>
            </div>
          </ShadowCard>

          {/* Step 2 */}
          <ShadowCard shadow="bottom-right" className="">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Create An Account
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sign into your Grass account to start earning rewards
                </p>
              </div>
            </div>
          </ShadowCard>

          {/* Step 3 */}
          <ShadowCard shadow="bottom-right" className="">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Earn
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Earn rewards for sharing your unused internet
                </p>
              </div>
            </div>
          </ShadowCard>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection;
