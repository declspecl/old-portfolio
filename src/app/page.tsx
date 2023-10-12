import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Background from "@/components/Background/Background";
import Centered from "@/components/Layout/Centered";
import Navi from "@/components/Navi/Navi";

export default function Home() {
	return (
		<div>
			<Background />

			<Navi />

			<Centered>
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</Centered>
		</div>
	);
}
