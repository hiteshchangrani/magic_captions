import PageHeaders from "../components/PageHeaders";

export default function PricingPage() {
    return (
        <div>
            <PageHeaders
            h1text = {'Check out our pricing'}
            h2text = {'Our pricing is very simple'}
            />
            <div className="bg-white text-slate-700 rounded-lg max-w-sm mx-auto p-4 text-center">
                <h3 className="font-bold text-3xl">Free</h3>
                <h4>Free forever</h4>
            </div>
        </div>
    )
}