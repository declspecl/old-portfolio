import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}
