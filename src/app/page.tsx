import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import WithBackground from "@/components/Background/WithBackground";

export default function Home() {
	return (
		<div>
			<WithBackground>
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</WithBackground>
		</div>
	);
}
