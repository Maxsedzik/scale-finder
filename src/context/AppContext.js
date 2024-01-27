import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	//Data
	//Scales [[notes],[chords]]
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

	//States
	//Whether were finding scale by chords or notes. By default must be false.
	const [notesSelected, setNotesSelected] = useState(false);
	const [chordsSelected, setChordsSelected] = useState(false);

	//Minimum amount of notes that must be selected to find the scale. By default must be 3.
	const [notesRequired, setNotesRequired] = useState(3);

	//State of every note. True means that note was selected. By default must be false.
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

	//State of every chord. True means that chord was selected. By default must be false.
	const [achord, setAchord] = useState(false);
	const [aischord, setAischord] = useState(false);
	const [bchord, setBchord] = useState(false);
	const [cchord, setCchord] = useState(false);
	const [cischord, setCischord] = useState(false);
	const [dchord, setDchord] = useState(false);
	const [dischord, setDischord] = useState(false);
	const [echord, setEchord] = useState(false);
	const [fchord, setFchord] = useState(false);
	const [fischord, setFischord] = useState(false);
	const [gchord, setGchord] = useState(false);
	const [gischord, setGischord] = useState(false);
	const [amchord, setAmchord] = useState(false);
	const [aismchord, setAismchord] = useState(false);
	const [bmchord, setBmchord] = useState(false);
	const [cmchord, setCmchord] = useState(false);
	const [cismchord, setCismchord] = useState(false);
	const [dmchord, setDmchord] = useState(false);
	const [dismchord, setDismchord] = useState(false);
	const [emchord, setEmchord] = useState(false);
	const [fmchord, setFmchord] = useState(false);
	const [fismchord, setFismchord] = useState(false);
	const [gmchord, setGmchord] = useState(false);
	const [gismchord, setGismchord] = useState(false);

	//Array of notes/chords that were selected. By default must be empty array.
	const [notesToCompare, setNotesToCompare] = useState([]);
	const [chordsToCompare, setChordsToCompare] = useState([]);

	//State of every scale. True means that scale matches selected notes/chords. By default must be false.
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

	//Whether any scale fitted selected notes/chords. True means they did. By default must be false.
	const [isResult, setIsResult] = useState(false);

	//Functions
	//Function called by choosing "Select by notes". It displays NotesPanel component.
	const notesClicked = () => {
		setNotesSelected(true);
		setChordsSelected(false);
	};

	//Function called by choosing "Select by chords". It displays ChordsPanel component.
	const chordsClicked = () => {
		setChordsSelected(true);
		setNotesSelected(false);
	};

	//Function that plays sound of a note/scale. Called by button inside Notes/ChordsPanel. Argument is a note/chord imported from data folder.
	function playSound(sound) {
		new Audio(sound).play();
	}

	//Function called by clear button in NotesPanel. Setting states of all notes to false, current required amounts of notes back to 3, result to not be found and clearing array of notes that were to be compared.
	const clearNotes = () => {
		setNotesRequired(3);
		setNotesToCompare([]);
		setIsResult(false);
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

	//Function called by clear button in ChordssPanel. Setting states of all chords to false, result to not be found and clearing array of chords that were to be compared.
	const clearChords = () => {
		setChordsToCompare([]);
		setIsResult(false);
		setAmchord(false);
		setAismchord(false);
		setBmchord(false);
		setCmchord(false);
		setCismchord(false);
		setDmchord(false);
		setDismchord(false);
		setEmchord(false);
		setFmchord(false);
		setFismchord(false);
		setGmchord(false);
		setGismchord(false);
		setAchord(false);
		setAischord(false);
		setBchord(false);
		setCchord(false);
		setCischord(false);
		setDchord(false);
		setDischord(false);
		setEchord(false);
		setFchord(false);
		setFischord(false);
		setGchord(false);
		setGischord(false);
	};

	//Function handling selecting(clicking) specific note. Arguments are note(string), setNote which is set function from useState hook and stateOfNote which is current state of a note.
	function noteClicked(note, setNote, stateOfNote) {
		//!stateOfNote means note was not selected before.
		if (!stateOfNote) {
			//Setting the state of a note to true.
			setNote(true);
			//Adding note to array that will be compared to all of the scale arrays.
			setNotesToCompare((notesToCompare) => [...notesToCompare, note]);
			//Decreasing current required amount of notes that must be selected.
			setNotesRequired((notesRequired) => (notesRequired -= 1));
		} else {
			//Clicking a note whose state was true means, note must be "unclicked".
			//Setting state of a note to false.
			setNote(false);
			//Clearing array of notes to be compared from "unclicked" note.
			setNotesToCompare(notesToCompare.filter((e) => e !== note));
			//Increasing current required amount of notes that must be selected.
			setNotesRequired((notesRequired) => (notesRequired += 1));
		}
	}

	//Function handling selecting(clicking) specific Chord. Arguments are chord(string), setChord which is set function from useState hook and stateOfChord which is current state of a chord.
	function chordClicked(chord, setChord, stateOfChord) {
		//!stateOfChord means chord was not selected before.
		if (!stateOfChord) {
			//Setting the state of a chord to true.
			setChord(true);
			//Adding chord to array that will be compared to all of the scale arrays.
			setChordsToCompare((chordsToCompare) => [...chordsToCompare, chord]);
		} else {
			//Clicking a chord whose state was true means, chord must be "unclicked".
			//Setting state of a chord to false.
			setChord(false);
			//Clearing array of chords to be compared from "unclicked" chord.
			setChordsToCompare(chordsToCompare.filter((e) => e !== chord));
		}
	}

	//Calling checkingScale function for every scale everytime the arrays of selected notes/chords changed.
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
	}, [notesToCompare, chordsToCompare]);

	//Function that handle finding fitting scale for either notes or chords. Arguments are scale(array) and setScaleResult which is a function that changes state of a positive match.
	function checkingScale(scale, setScaleResult) {
		//For notes
		if (notesSelected) {
			checkScaleByNotes(scale, setScaleResult);
			//For chords
		} else if (chordsSelected) {
			checkScaleByChords(scale, setScaleResult);
		}
	}

	//Function that is checking if scale fits notes that were selected to compare. Arguments were passed in checkingScale function.
	function checkScaleByNotes(scale, setScaleResult) {
		if (
			//Clearing array from all notes that are not present in a given scale and then comparing length of that cleared array to the length of an uncleared array. Same length means there were no not unmatching notes and scale is fitting.
			notesToCompare.filter((note) => scale[0].includes(note)).length ===
				notesToCompare.length &&
			//Check if required amount of notes were selected.
			notesToCompare.length >= 3
		) {
			//Setting result of a given scale to true(scale is fitting).
			setScaleResult(true);
			//Setting isResult to true. There was a match and there is result to be shown.
			setIsResult(true);
		} else {
			//Uncleared and cleared arrays were different, meaning that scale does not fit because of some notes.
			//Setting resulr of a given scale to false(scale is not fitting.)
			setScaleResult(false);
		}
	}

	//Function that is checking if scale fits chords that were selected to compare. Arguments were passed in checkingScale function.
	function checkScaleByChords(scale, setScaleResult) {
		if (
			//Clearing array from all chords that are not present in a given scale and then comparing length of that cleared array to the length of an uncleared array. Same length means there were no not unmatching chords and scale is fitting.
			chordsToCompare.filter((chord) => scale[1].includes(chord)).length ===
			chordsToCompare.length
		) {
			//Setting result of a given scale to true(scale is fitting).
			setScaleResult(true);
			//Setting isResult to true. There was a match and there is result to be shown.
			setIsResult(true);
		} else {
			//Uncleared and cleared arrays were different, meaning that scale does not fit because of some chords.
			//Setting resulr of a given scale to false(scale is not fitting.)
			setScaleResult(false);
		}
	}

	//Functions that displays the notes of a fitting scale in Results component. Bolded are the notes that were selected to check. Argument is a scale(array)
	function notesMarking(scale) {
		//Mapping through the array of notes and returning <li> for every note. Class is conditional. If a given note was in array of the selected ones, it gets marked class to be bolded.
		return scale[0].map((note) => (
			<li className={notesToCompare.includes(note) ? "marked" : ""} key={note}>
				{note}
			</li>
		));
	}

	//Functions that displays the chords of a fitting scale in Results component. Bolded are the chords that were selected to check. Argument is a scale(array)
	function chordsMarking(scale) {
		//Mapping through the array of chords and returning <li> for every chord. Class is conditional. If a given chord was in array of the selected ones, it gets marked class to be bolded.
		return scale[1].map((chord) => (
			<li
				className={chordsToCompare.includes(chord) ? "marked" : ""}
				key={chord}>
				{chord}
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
				chordsMarking,
				chordClicked,
				chordsToCompare,
				achord,
				aischord,
				bchord,
				cchord,
				cischord,
				dchord,
				dischord,
				echord,
				fchord,
				fischord,
				gchord,
				gischord,
				setAchord,
				setAischord,
				setBchord,
				setCchord,
				setCischord,
				setDchord,
				setDischord,
				setEchord,
				setFchord,
				setFischord,
				setGchord,
				setGischord,
				amchord,
				aismchord,
				bmchord,
				cmchord,
				cismchord,
				dmchord,
				dismchord,
				emchord,
				fmchord,
				fismchord,
				gmchord,
				gismchord,
				setAmchord,
				setAismchord,
				setBmchord,
				setCmchord,
				setCismchord,
				setDmchord,
				setDismchord,
				setEmchord,
				setFmchord,
				setFismchord,
				setGmchord,
				setGismchord,
				clearChords,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
