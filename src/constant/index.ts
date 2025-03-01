 
type PlanFeature = {
    text: string;
};

type PricingPlan = {
    title: string;
    description: string;
    price: number;
    features: PlanFeature[];
};

// pricing plans for the cards
export const pricingPlans: PricingPlan[] = [
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


// companies name.. and there logos

export const companies = [
    {
        name: "Google",
        logo: "/Google.svg",
    },
    {
        name: "Microsoft",
        logo: "/Microsoft.svg",
    },
    {
        name: "GitHub",
        logo: "/GitHub.svg",
    },
    {
        name: "Uber",
        logo: "/Uber.svg",
    },
    {
        name: "Notion",
        logo: "/Notion.svg",
    }
]


// marquee cards data

 