import Header from "./components/Header";
import SelectionPanel from "./components/SelectionPanel";
import NotesPanel from "./components/NotesPanel";
import ChordsPanel from "./components/ChordsPanel";
import Results from "./components/Results";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Block from "./components/shared/Block";

function App() {
	const [notesSelected, setNotesSelected] = useState(false);
	const [chordsSelected, setChordsSelected] = useState(false);
	const [notesToCompare, setNotesToCompare] = useState([]);
	const [aminorResult, setAminorResult] = useState(false);
	const [aisminorResult, setAisminorResult] = useState(false);
	const [bminorResult, setBminorResult] = useState(false);
	const [cminorResult, setCminorResult] = useState(false);
	const [cisminorResult, setCisminorResult] = useState(false);
	const [dminorResult, setDminorResult] = useState(false);
	const [disminorResult, setDisminorResult] = useState(false);
	const [eminorResult, setEminorResult] = useState(false);
	const [fminorResult, setFminorResult] = useState(false);
	const [fisminorResult, setFisminorResult] = useState(false);
	const [gminorResult, setGminorResult] = useState(false);
	const [gisminorResult, setGisminorResult] = useState(false);
	const [amajorResult, setAmajorResult] = useState(false);
	const [aismajorResult, setAismajorResult] = useState(false);
	const [bmajorResult, setBmajorResult] = useState(false);
	const [cmajorResult, setCmajorResult] = useState(false);
	const [cismajorResult, setCismajorResult] = useState(false);
	const [dmajorResult, setDmajorResult] = useState(false);
	const [dismajorResult, setDismajorResult] = useState(false);
	const [emajorResult, setEmajorResult] = useState(false);
	const [fmajorResult, setFmajorResult] = useState(false);
	const [fismajorResult, setFismajorResult] = useState(false);
	const [gmajorResult, setGmajorResult] = useState(false);
	const [gismajorResult, setGismajorResult] = useState(false);

	const [isResult, setIsResult] = useState(false);

	const notesClicked = () => {
		setNotesSelected(true);
		setChordsSelected(false);
	};
	const chordsClicked = () => {
		setChordsSelected(true);
		setNotesSelected(false);
	};

	const cminor = [
		["C", "D", "D#", "F", "G", "G#", "A#"],
		["Cm", "Ddim", "D#", "Fm", "Gm", "G#", "A#"],
	];
	const cisminor = [
		["C#", "D#", "E", "F#", "G#", "A", "B"],
		["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
	];
	const dminor = [
		["D", "E", "F", "G", "A", "A#", "C"],
		["Dm", "Edim", "F", "Gm", "Am", "A#", "C"],
	];
	const disminor = [
		["D#", "F", "F#", "G#", "A#", "B", "C#"],
		["D#m", "Fdim", "F#", "G#m", "A#m", "B", "C#"],
	];
	const eminor = [
		["E", "F#", "G", "A", "B", "C", "D"],
		["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
	];
	const fminor = [
		["F", "G", "G#", "A#", "C", "C#", "D#"],
		["Fm", "Gdim", "G#", "A#m", "Cm", "C#", "D#"],
	];
	const fisminor = [
		["F#", "G#", "A", "B", "C#", "D", "E"],
		["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
	];
	const gminor = [
		["G", "A", "A#", "C", "D", "D#", "F"],
		["Gm", "Adim", "A#", "Cm", "Dm", "D#", "F"],
	];
	const gisminor = [
		["G#", "A#", "B", "C#", "D#", "E", "F#"],
		["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
	];
	const aminor = [
		["A", "B", "C", "D", "E", "F", "G"],
		["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
	];
	const aisminor = [
		["A#", "C", "C#", "D#", "F", "F#", "G#"],
		["A#m", "Cdim", "C#", "D#m", "Fm", "F#", "G#"],
	];
	const bminor = [
		["B", "C#", "D", "E", "F#", "G", "A"],
		["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
	];

	const cmajor = [
		["C", "D", "E", "F", "G", "A", "B"],
		["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
	];
	const cismajor = [
		["C#", "D#", "F", "F#", "G#", "A#", "C"],
		["C#", "D#m", "Fm", "F#", "G#m", "A#m", "Cdim"],
	];
	const dmajor = [
		["D", "E", "F#", "G", "A", "B", "C#"],
		["D", "Em", "F#,", "G", "A", "Bm", "C#dim"],
	];
	const dismajor = [
		["D#", "F", "G", "G#", "A#", "C", "D"],
		["D#", "Fm", "Gm", "G#", "A#", "Cm", "Ddim"],
	];
	const emajor = [
		["E", "F#", "G#", "A", "B", "C#", "D#"],
		["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
	];
	const fmajor = [
		["F", "G", "A", "A#", "C", "D", "E"],
		["F", "Gm", "Am", "A#", "C", "Dm", "Edim"],
	];
	const fismajor = [
		["F#", "G#", "A#", "B", "C#", "D#", "F"],
		["F#", "G#m", "A#m", "B", "C#", "D#m", "Fdim"],
	];
	const gmajor = [
		["G", "A", "B", "C", "D", "E", "F#"],
		["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
	];
	const gismajor = [
		["G#", "A#", "C", "C#", "D#", "F", "G"],
		["G#", "A#m", "Cm", "C#", "D#", "Fm", "Gdim"],
	];
	const amajor = [
		["A", "B", "C#", "D", "E", "F#", "G#"],
		["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
	];
	const aismajor = [
		["A#", "C", "D", "D#", "F", "G", "A"],
		["A#", "Cm", "Dm", "D#", "F", "Gm", "Adim"],
	];
	const bmajor = [
		["B", "C#", "D#", "E", "F#", "G#", "A#"],
		["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
	];

	useEffect(() => {
		checkingScale(aminor, setAminorResult);
		checkingScale(aisminor, setAisminorResult);
		checkingScale(bminor, setBminorResult);
		checkingScale(cminor, setCminorResult);
		checkingScale(cisminor, setCisminorResult);
		checkingScale(dminor, setDminorResult);
		checkingScale(disminor, setDisminorResult);
		checkingScale(eminor, setEminorResult);
		checkingScale(fminor, setFminorResult);
		checkingScale(fisminor, setFisminorResult);
		checkingScale(gminor, setGminorResult);
		checkingScale(gisminor, setGisminorResult);
		checkingScale(amajor, setAmajorResult);
		checkingScale(aismajor, setAismajorResult);
		checkingScale(bmajor, setBmajorResult);
		checkingScale(cmajor, setCmajorResult);
		checkingScale(cismajor, setCismajorResult);
		checkingScale(dmajor, setDmajorResult);
		checkingScale(dismajor, setDismajorResult);
		checkingScale(emajor, setEmajorResult);
		checkingScale(fmajor, setFismajorResult);
		checkingScale(fismajor, setFismajorResult);
		checkingScale(gmajor, setGmajorResult);
		checkingScale(gismajor, setGismajorResult);
	}, [notesToCompare]);

	function checkingScale(scale, setScaleResult) {
		if (
			notesToCompare.filter((note) => scale[0].includes(note)).length ===
				notesToCompare.length &&
			notesToCompare.length >= 3
		) {
			setScaleResult(true);
			setIsResult(true);
		} else {
			setScaleResult(false);
		}
	}

	return (
		<>
			<div className="container">
				<Header />
				{/* <Block>
					<br />
					{notesToCompare.filter((note) => aminor[0].includes(note))}
					<br />
					{notesToCompare.filter((note) => bminor[0].includes(note))}
					<br />
					{notesToCompare}
				</Block> */}
				<SelectionPanel
					notesClicked={notesClicked}
					chordsClicked={chordsClicked}
				/>
				{notesSelected && (
					<NotesPanel
						notesToCompare={notesToCompare}
						setNotesToCompare={setNotesToCompare}
						setAminorResult={setAminorResult}
						setAisminorResult={setAisminorResult}
						setBminorResult={setBminorResult}
						setCminorResult={setCminorResult}
						setCisminorResult={setCisminorResult}
						setDminorResult={setDminorResult}
						setDisminorResult={setDisminorResult}
						setEminorResult={setEminorResult}
						setFminorResult={setFminorResult}
						setFisminorResult={setFisminorResult}
						setGminorResult={setGminorResult}
						setGisminorResult={setGisminorResult}
						setAmajorResult={setAmajorResult}
						setAismajorResult={setAismajorResult}
						setBmajorResult={setBmajorResult}
						setCmajorResult={setCmajorResult}
						setCismajorResult={setCismajorResult}
						setDmajorResult={setDmajorResult}
						setDismajorResult={setDismajorResult}
						setEmajorResult={setEmajorResult}
						setFmajorResult={setFmajorResult}
						setFismajorResult={setFismajorResult}
						setGmajorResult={setGmajorResult}
						setGismajorResult={setGismajorResult}
						setIsResult={setIsResult}
					/>
				)}
				{chordsSelected && <ChordsPanel />}

				{notesToCompare.length >= 3 && (
					<Results
						aminorResult={aminorResult}
						aisminorResult={aisminorResult}
						bminorResult={bminorResult}
						cminorResult={cminorResult}
						cisminorResult={cisminorResult}
						dminorResult={dminorResult}
						disminorResult={disminorResult}
						eminorResult={eminorResult}
						fminorResult={fminorResult}
						fisminorResult={fisminorResult}
						gminorResult={gminorResult}
						gisminorResult={gisminorResult}
						amajorResult={amajorResult}
						aismajorResult={aismajorResult}
						bmajorResult={bmajorResult}
						cmajorResult={cmajorResult}
						cismajorResult={cismajorResult}
						dmajorResult={dmajorResult}
						dismajorResult={dismajorResult}
						emajorResult={emajorResult}
						fmajorResult={fmajorResult}
						fismajorResult={fismajorResult}
						gmajorResult={gmajorResult}
						gismajorResult={gismajorResult}
						isResult={isResult}
						notesToCompare={notesToCompare}
						aminor={aminor}
						aisminor={aisminor}
						bminor={bminor}
						cminor={cminor}
						cisminor={cisminor}
						dminor={dminor}
						disminor={disminor}
						eminor={eminor}
						fminor={fminor}
						fisminor={fisminor}
						gminor={gminor}
						gisminor={gisminor}
						amajor={amajor}
						aismajor={aismajor}
						bmajor={bmajor}
						cmajor={cmajor}
						cismajor={cismajor}
						dmajor={dmajor}
						dismajor={dismajor}
						emajor={emajor}
						fmajor={fmajor}
						fismajor={fismajor}
						gmajor={gmajor}
						gismajor={gismajor}
					/>
				)}
			</div>
		</>
	);
}

export default App;
