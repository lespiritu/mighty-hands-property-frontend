import { Hero, Intro, Categories } from "../components"

export function Home() {
    return (
        <div className="pt-20">
            <Hero title="Choose to live that provides your family the ultimate sanctuary" />

            <Intro textDetails="Property values have historically tended to increase over the long term. While short-term fluctuations are possible, real estate investments have the potential to appreciate in value over time, allowing investors to generate profit when they sell the property."
            title="Land Property is a good investment"
            />

            <Categories />
        </div>
    )
}