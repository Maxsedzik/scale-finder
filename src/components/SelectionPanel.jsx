import React from "react";
import Block from "./shared/Block";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function SelectionPanel() {
	const { notesClicked, chordsClicked } = useContext(AppContext);

	return (
		<Block>
			<p className="info">Choose whether you want to select notes or chords</p>
			<div className="buttons">
				<button onClick={notesClicked} className="btn">
					Notes
				</button>
				<button onClick={chordsClicked} className="btn">
					Chords
				</button>
			</div>
		</Block>
	);
}

export default SelectionPanel;
