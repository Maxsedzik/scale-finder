import Header from "./components/Header";
import SelectionPanel from "./components/SelectionPanel";
import NotesPanel from "./components/NotesPanel";
import ChordsPanel from "./components/ChordsPanel";
import Results from "./components/Results";
import { useState, useEffect, useContext } from "react";
import AppContext from "./context/AppContext";

function App() {
	const {
		notesSelected,
		chordsSelected,
		notesToCompare,
		chordsToCompare,
		aminor,
		aminorResult,
	} = useContext(AppContext);

	return (
		<>
			<div className="container">
				<Header />
				<SelectionPanel />
				{notesSelected && <NotesPanel />}
				{chordsSelected && <ChordsPanel />}
				{notesToCompare.length >= 3 || chordsToCompare.length >= 1 ? (
					<Results />
				) : null}
			</div>
		</>
	);
}

export default App;
