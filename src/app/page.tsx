import Navi from "@/components/Navi/Navi";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Background from "@/components/Background/Background";
import Centered from "@/components/Layout/Centered";

export default function Home() {
	return (
		<div>
			<Background />

			<Navi />

			<Centered>
				<Hero />
				<div className="flex flex-col gap-24 mb-12">
					<About />
					<Projects />
					<Skills />
					<Contact />
				</div>
			</Centered>
		</div>
	);
}
