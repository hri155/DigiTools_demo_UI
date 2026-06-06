const CheckIcon = ({ light = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 shrink-0 ${light ? "text-green-300" : "text-green-500"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Pricing = () => {
  return (
    <section className="mt-20 px-4 md:px-8 lg:px-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl text-black font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-3 text-sm md:text-base text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="card w-full max-w-sm mx-auto bg-white border border-gray-200 shadow-sm p-6">
          <h2 className="text-2xl text-black font-semibold">Starter</h2>
          <p className="mt-2 text-sm text-[#627382]">
            Perfect for getting started
          </p>

          <div className="mt-6 text-4xl font-bold text-black">
            $0<span className="text-base font-normal text-[#627382]">/month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-[#1f2937]">
            {[
              "Access to 10 free tools",
              "Basic templates",
              "Community support",
              "1 project per month",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <button className="btn w-full rounded-full border-0 bg-linear-to-r from-[#4f39f6] to-[#a21caf] text-white">
              Get Started Free
            </button>
          </div>
        </div>

        <div className="card relative w-full max-w-sm mx-auto border-0 shadow-sm p-6 bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#a21caf] text-white">
          <span className="badge badge-warning badge-sm absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </span>

          <h2 className="text-2xl font-semibold">Pro</h2>
          <p className="mt-2 text-sm text-white/80">Best for professionals</p>

          <div className="mt-6 text-4xl font-bold">
            $29<span className="text-base font-normal text-white/80">/month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Access to all premium tools",
              "Unlimited templates",
              "Priority support",
              "Unlimited projects",
              "Cloud sync",
              "Advanced analytics",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon light />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <button className="btn w-full rounded-full bg-white border-0 text-[#4f39f6]">
              Start Pro Trial
            </button>
          </div>
        </div>

        <div className="card w-full max-w-sm mx-auto bg-white border border-gray-200 shadow-sm p-6">
          <h2 className="text-2xl text-black font-semibold">Enterprise</h2>
          <p className="mt-2 text-sm text-[#627382]">
            For teams and businesses
          </p>

          <div className="mt-6 text-4xl font-bold text-black">
            $99<span className="text-base font-normal text-[#627382]">/month</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-[#1f2937]">
            {[
              "Everything in Pro",
              "Team collaboration",
              "Custom integrations",
              "Dedicated support",
              "SLA guarantee",
              "Custom branding",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <button className="btn w-full rounded-full border-0 bg-linear-to-r from-[#4f39f6] to-[#a21caf] text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;