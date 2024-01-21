import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [notesSelected, setNotesSelected] = useState(false);
	const [chordsSelected, setChordsSelected] = useState(false);
	const [notesRequired, setNotesRequired] = useState(3);
	const [anote, setAnote] = useState(false);
	const [aisnote, setAisnote] = useState(false);
	const [bnote, setBnote] = useState(false);
	const [cnote, setCnote] = useState(false);
	const [cisnote, setCisnote] = useState(false);
	const [dnote, setDnote] = useState(false);
	const [disnote, setDisnote] = useState(false);
	const [enote, setEnote] = useState(false);
	const [fnote, setFnote] = useState(false);
	const [fisnote, setFisnote] = useState(false);
	const [gnote, setGnote] = useState(false);
	const [gisnote, setGisnote] = useState(false);
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
	const notesClicked = () => {
		console.log("notes");
		setNotesSelected(true);
		setChordsSelected(false);
	};
	const chordsClicked = () => {
		console.log("chords");
		setChordsSelected(true);
		setNotesSelected(false);
	};

	function playSound(note) {
		new Audio(note).play();
	}

	const clearNotes = () => {
		setAnote(false);
		setAisnote(false);
		setBnote(false);
		setCnote(false);
		setCisnote(false);
		setDnote(false);
		setDisnote(false);
		setEnote(false);
		setFnote(false);
		setFisnote(false);
		setGnote(false);
		setGisnote(false);
		setNotesRequired(3);
		setNotesToCompare([]);
		setAminorResult(false);
		setAisminorResult(false);
		setBminorResult(false);
		setCminorResult(false);
		setCisminorResult(false);
		setDminorResult(false);
		setDisminorResult(false);
		setEminorResult(false);
		setFminorResult(false);
		setFisminorResult(false);
		setGminorResult(false);
		setGisminorResult(false);
		setIsResult(false);
		setAmajorResult(false);
		setAismajorResult(false);
		setBmajorResult(false);
		setCmajorResult(false);
		setCismajorResult(false);
		setDmajorResult(false);
		setDismajorResult(false);
		setEmajorResult(false);
		setFmajorResult(false);
		setFismajorResult(false);
		setGmajorResult(false);
		setGismajorResult(false);
	};

	function noteClicked(note, setNote, stateOfNote) {
		if (!stateOfNote) {
			setNote(true);
			setNotesToCompare((notesToCompare) => [...notesToCompare, note]);
			setNotesRequired((notesRequired) => (notesRequired -= 1));
		} else {
			setNote(false);
			setNotesToCompare(notesToCompare.filter((e) => e !== note));
			setNotesRequired((notesRequired) => (notesRequired += 1));
		}
	}

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

	function notesMarking(scale) {
		return scale[0].map((note) => (
			<li className={notesToCompare.includes(note) ? "marked" : ""} key={note}>
				{note}
			</li>
		));
	}
	return (
		<AppContext.Provider
			value={{
				notesToCompare,
				notesClicked,
				chordsClicked,
				notesSelected,
				chordsSelected,
				notesRequired,
				playSound,
				noteClicked,
				anote,
				aisnote,
				bnote,
				cnote,
				cisnote,
				dnote,
				disnote,
				enote,
				fnote,
				fisnote,
				gnote,
				gisnote,
				setAnote,
				setAisnote,
				setBnote,
				setCnote,
				setCisnote,
				setDnote,
				setDisnote,
				setEnote,
				setFnote,
				setFisnote,
				setGnote,
				setGisnote,
				aminorResult,
				aisminorResult,
				bminorResult,
				cminorResult,
				cisminorResult,
				dminorResult,
				disminorResult,
				eminorResult,
				fminorResult,
				fisminorResult,
				gminorResult,
				gisminorResult,
				amajorResult,
				aismajorResult,
				bmajorResult,
				cmajorResult,
				cismajorResult,
				dmajorResult,
				dismajorResult,
				emajorResult,
				fmajorResult,
				fismajorResult,
				gmajorResult,
				gismajorResult,
				clearNotes,
				aminor,
				aisminor,
				bminor,
				cminor,
				cisminor,
				dminor,
				disminor,
				eminor,
				fminor,
				fisminor,
				gminor,
				gisminor,
				amajor,
				aismajor,
				bmajor,
				cmajor,
				cismajor,
				dmajor,
				dismajor,
				emajor,
				fmajor,
				fismajor,
				gmajor,
				gismajor,
				isResult,
				notesMarking,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
