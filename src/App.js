import './scss/App.scss';
import { useEffect } from "react";
import Section from './components/Section';
import ImageContainer from './components/ImageContainer';
import List from './components/List';

function App() {
	return (
		<div id="page">
			<div id="overlay" className="crt"></div>
			<div id="jtnadrooi">
				JTNADROOI
				<div>Is how I'm called.</div>
			</div>
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
				<Section id="stolon" dimensions="large" isProject={true}>
					<img id="stolonFax" src="media/fax_icon2_wide.png" alt="Stolon Fax" />
					<div>
						Stolon is a game coded in C# and XNA/Monogame that switches the "Four in a row" formula up a bit.
						More info is on the <a href="https://github.com/JTnadrooi/">Github.</a>
						<ImageContainer headerText="Screenshots" images={["media/Screenshot1.png", "media/Screenshot2.png", "media/Screenshot3.png"]} />
						<a href="https://github.com/JTnadrooi/Stolon/releases">Download!</a>
					</div>
				</Section>

				<Section id="cirno" dimensions="tall" isProject>
					<img className="smallImg" src="media/mboLogoPaletteSmall.png" alt="Cirno" />
					Cirno is a calculator I made for the first school project.
				</Section>

				<Section id="github">
					My Github can be found <a href="https://github.com/JTnadrooi/">here</a>.
				</Section>

				<Section id="asitlib" isProject>
					An unreleased C# library I use for almost all my C# projects.
				</Section>

				<Section id="yt">
					My YouTube can be found <a href="https://www.youtube.com/@jtnadrooi">here</a>.
				</Section>
				<Section id="asitd" isProject>
					<img className="smallImg" src="media/docIconSmall.png" alt="ASITD" />
					".asitd" is a text-based file type useful for reading large amounts of text quickly.
				</Section>

				<Section id="spl" dimensions="tall" isProject>
					SpellScript is a WIP (uncompiled) scripting language for modular modding support.
				</Section>
				{/* 
				<Section id="contact">
					Discord: JTnadrooi <br />
					Github: JTnadrooi <br />
					YouTube: JTnadrooi <br />
					Steam: JTnadrooia <br />
				</Section> */}
				<Section id="asita" dimensions="wide" isProject>
					<img className="smallImg" src="media/docIconSmall.png" alt="ASITA" />
					(Discontinued) .asita files were optimized archive files now merged with .asitd.
				</Section>
				<Section id="languages" dimensions="wide">
					All languages I can program in.
				</Section>
				<Section id="programs">
					Programs I'm comfortable using.
					<List items={['VSCode', 'Visual Studio', 'FLStudio', 'LMMS', 'Aseprite']} />
				</Section>
				<Section id="music" dimensions="wide">
					<img className="medImg" src="media/welcome.png" alt="Music" />
					Music I put on YouTube.
					<ul>
						<li>
							<a href="https://www.youtube.com/watch?v=au9DP92n83k">Stolon OST - Welcome.</a>
						</li>
					</ul>
				</Section>
			</div>
		</div>
	);
}

export default App;