import './scss/App.scss';
import { useEffect } from "react";
import Section from './components/Section';

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
						<br /><br />
						Screenshots:
						<img className="screenshot" src="media/Screenshot1.png" alt="Screenshot 1" />
						<img className="screenshot" src="media/Screenshot2.png" alt="Screenshot 2" />
						<img className="screenshot" src="media/Screenshot3.png" alt="Screenshot 3" />
						<br /><br />
						<a href="https://github.com/JTnadrooi/Stolon/releases">Download!</a>
					</div>
				</Section>
				<div id="cirno" className="section high" project="true">
					<img className="smallImg" src="media/mboLogoPaletteSmall.png" alt="Cirno" />
					Cirno is a calculator I made for the first school project.
				</div>
				<div id="github" className="section">
					My Github can be found <a href="https://github.com/JTnadrooi/">here</a>.
				</div>
				<div id="asitlib" className="section" project="true">
					An unreleased C# library I use for almost all my C# projects.
				</div>
				<div id="yt" className="section">
					My Youtube can be found <a href="https://www.youtube.com/@jtnadrooi">here</a>.
				</div>
				<div id="asitd" className="section" project="true">
					<img className="smallImg" src="media/docIconSmall.png" alt="ASITD" />
					".asitd" is a text-based file type useful for reading large amounts of text quickly.
				</div>
				<div id="spl" className="section high" project="true">
					SpellScript is a WIP (uncompiled) scripting language for modular modding support.
				</div>
				<div id="contact" className="section">
					Discord: JTnadrooi <br />
					Github: JTnadrooi <br />
					Youtube: JTnadrooi <br />
					Steam: JTnadrooia <br />
				</div>
				<div id="asita" className="section wide" project="true">
					<img className="smallImg" src="media/docIconSmall.png" alt="ASITA" />
					(Discontinued) .asita files were optimized archive files now merged with .asitd.
				</div>
				<div id="languages" className="section wide">
					All languages I can program in.
				</div>
				<div id="programs" className="section">
					Programs I'm comfortable with using.
					<ul>
						<li>VSCode</li>
						<li>Visual Studio</li>
						<li>FLStudio</li>
						<li>LMMS</li>
						<li>Aseprite</li>
					</ul>
				</div>
				<div id="music" className="section wide">
					<img className="medImg" src="media/welcome.png" alt="Music" />
					Music I put on YouTube.
					<ul>
						<li>
							<a href="https://www.youtube.com/watch?v=au9DP92n83k">Stolon OST - Welcome.</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;