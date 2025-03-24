import './scss/App.scss';
import { useEffect } from "react";
import Section from './components/Section';
import ImageContainer from './components/ImageContainer';
import List from './components/List';
import RecursiveList from './components/RecursiveList';
import PageHeader from './components/PageHeader';
import React from "react";

export default class App extends React.Component {
	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	}

	handleClickOutside(event) {

	}
	render() {
		const languages = [
			{
				name: "C#/C-Sharp (3.5y)",
				subtopics: ["XNA", "Monogame", ".Net 6, 7 and 8"],
			},
			{ name: "HLSL" },
			{ name: "BatchScript" },
			{ name: "SpellScript" },
			{ name: "HTML" },
			{
				name: "CSS",
				subtopics: ["SASS", "SCSS"],
			},
			{ name: "JavaScript" },
		];
		return (
			<div id="page">
				<div id="overlay" className="crt"></div>
				<PageHeader userName={false} />
				<div id="sideView" className="pageSection">
					<h1>PAGE INFO</h1>
					<ul>
						<li>Projects are prefixed with a "P".</li>
						<li>All tiles are scrollable.</li>
					</ul>
					<br />
					<h1>CONTENT</h1>
					<div id="buttonContainer"></div>
				</div>
				<div id="container" className="pageSection">
					<Section id="stolon" dimensions="large" isProject>
						<img id="stolonFax" src="media/fax_icon2_wide.png" alt="Stolon Fax" />
						<div>
							Stolon is a game coded in C# and XNA/Monogame that switches the "Four in a row" formula up a bit. Development is currently paused.
							Planned features and other info is on the <a href="https://github.com/JTnadrooi/">Github.</a>
							<ImageContainer headerText="Screenshots" className="screenshot" images={["media/Screenshot1.png", "media/Screenshot2.png", "media/Screenshot3.png"]} />
							<a href="https://github.com/JTnadrooi/Stolon/releases">Download!</a>
						</div>
					</Section>
					<Section id="cirno" dimensions="default" isProject>
						<img className="smallImg" src="media/mboLogoPaletteSmall.png" alt="Cirno" />
						Cirno is a calculator I made for the first school project. Its not only fast, but makes use of an external JS library specialized in advanced statements. Supports variables, trigonometric functions and all popular constants.
					</Section>
					<Section id="github">
						My Github can be found <a href="https://github.com/JTnadrooi/">here</a>.
						<img className="medImg" src="https://avatars.githubusercontent.com/u/137219973?v=4" alt="GitHub Profile" />
					</Section>
					<Section id="asitlib" isProject>
						An unreleased C# library I use for almost all my C# projects. It has functions regarding files, a name generator, a fast C# dictionary alternative and a debuglibrary I have now partially ported to JS for use in Kaya.js.
					</Section>
					<Section id="yt">
						One of the places where I post my music. Can be found <a href="https://www.youtube.com/@jtnadrooi">here</a>.
					</Section>
					<Section id="asitd" isProject>
						<img className="smallImg" src="media/docIconSmall.png" alt="ASITD" />
						".asitd" is a text-based file type useful for reading large amounts of text quickly. It can be compared with Markdown. Managed using AsitLib(C#).
					</Section>
					<Section id="spl" dimensions="tall" isProject>
						SpellScript is a WIP (uncompiled) scripting language for modular modding support. Modern SpellScript can be read with the fast self contained Kaya.js interpreter(<a href="https://github.com/JTnadrooi/Kaya.js">github</a>). Older .spl files can only be read by the "SpellScript" subsection in the AsitLib library.
					</Section>
					<Section id="asita" dimensions="wide" isProject>
						<img className="smallImg" src="media/docIconSmall.png" alt="ASITA" />
						(Discontinued) .asita files were optimized archive files now merged with the .asitd file format.
					</Section>
					<Section id="languages" dimensions="wide">
						Programming languages I'm familiar with.
						<RecursiveList items={languages} />
					</Section>
					<Section id="programs">
						Programs I'm comfortable with.
						<List items={['VSCode', 'Visual Studio', 'FLStudio', 'LMMS', 'Aseprite']} />
					</Section>
					<Section id="music" dimensions="wide">
						<img className="medImg" src="media/welcome.png" alt="Music" />
						Music I put on YouTube.
						<List items={[<a href="https://www.youtube.com/watch?v=au9DP92n83k">Stolon OST - Welcome.</a>]} />
					</Section>
				</div>
			</div>
		);
	}
}