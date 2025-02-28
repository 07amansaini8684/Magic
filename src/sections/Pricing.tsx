import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

type PlanFeature = {
    text: string;
};

type PricingPlan = {
    title: string;
    description: string;
    price: number;
    features: PlanFeature[];
};

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState<boolean>(true);

    const pricingPlans: PricingPlan[] = [
        {
            title: "Basic",
            description: "A basic plan for startups and individual users",
            price: 10,
            features: [
                { text: "AI-powered analytics" },
                { text: "Basic support" },
                { text: "5 projects limit" },
                { text: "Access to basic AI tools" }
            ]
        },
        {
            title: "Premium",
            description: "A premium plan for growing businesses",
            price: 20,
            features: [
                { text: "Advanced AI insights" },
                { text: "Priority support" },
                { text: "Unlimited projects" },
                { text: "Access to all AI tools" },
                { text: "Custom integrations" }
            ]
        },
        {
            title: "Enterprise",
            description: "An enterprise plan with advanced features for large organizations",
            price: 50,
            features: [
                { text: "Custom AI solutions" },
                { text: "24/7 dedicated support" },
                { text: "Unlimited projects" },
                { text: "Access to all AI tools" },
                { text: "Custom integrations" },
                { text: "Data security and compliance" }
            ]
        },
        {
            title: "Ultimate",
            description: "The ultimate plan with all features for industry leaders",
            price: 80,
            features: [
                { text: "Bespoke AI development" },
                { text: "White-glove support" },
                { text: "Unlimited projects" },
                { text: "Priority access to new AI tools" },
                { text: "Custom integrations" },
                { text: "Highest data security and compliance" }
            ]
        }
    ];

    return (
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <div className=" w-full h-full max-w-7xl text-white bg-black">
                <div className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-2xl font-bold">Pricing</h2>
                        <h1 className="text-6xl font-bold mt-4 mb-6">Simple pricing for everyone.</h1>
                        <p className="text-xl max-w-3xl mx-auto mb-10">
                            Choose an <span className="font-bold">affordable plan</span> that's packed with the best
                            features for engaging your audience, creating customer loyalty, and driving sales.
                        </p>

                        <div className="flex items-center justify-center mb-12">
                            <span className="mr-3">Annual</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={!isAnnual}
                                    onChange={() => setIsAnnual(!isAnnual)}
                                />
                                <div
                                    className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </label>
                            <div className="flex items-center ml-3 bg-white rounded-2xl py-1 px-3 font-semibold text-xs text-zinc-800">
                                <span className="mr-2">2 MONTHS FREE</span>
                                <span
                                    className="bg-yellow-100 text-black text-xs font-bold px-1 py-0.5 rounded">✨</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={plan.title}
                                    className={`rounded-2xl py-6 pb-4 px-4 text-left  ${index === 1 ? 'overflow-hidden gradient-border' : 'border-[2px] border-zinc-900'}`}
                                >
                                    <h3 className="text-md font-bold">{plan.title}</h3>
                                    <p className="text-gray-200 mt-1 text-sm">{plan.description}</p>

                                    <div className="my-6">
                                        <span className="text-4xl font-bold">
                                            ${isAnnual ? plan.price * 10 : plan.price}
                                        </span>
                                        <span className="text-gray-400">{isAnnual ? '/year' : '/month'}</span>
                                    </div>

                                    <button
                                        className="w-full bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition text-md tracking-wide duration-200">
                                        Subscribe
                                    </button>

                                    <div
                                        className="w-full mt-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"/>

                                    <div className="mt-8 space-y-1">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <div
                                                    className="flex-shrink-0 h-5 w-5 text-white rounded-full bg-[#4ADF81] mt-1 mr-3 flex items-center justify-center">
                                                    <FaCheck className="h-3 w-3"/>
                                                </div>
                                                <p className="text-xs">{feature.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;