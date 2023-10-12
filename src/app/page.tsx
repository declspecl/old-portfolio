import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Background from "@/components/Background/Background";
import XMargin from "@/components/Layout/XMargin";
import Navi from "@/components/Navi/Navi";

export default function Home() {
	return (
		<div>
			<Background />

			<Navi />

			<XMargin>
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</XMargin>
		</div>
	);
}
