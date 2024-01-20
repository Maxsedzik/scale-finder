import React from "react";
import Block from "./shared/Block";

function SelectionPanel({ notesClicked, chordsClicked }) {
	const notesClickledHandler = () => {
		notesClicked();
	};
	const chordsClickledHandler = () => {
		chordsClicked();
	};
	return (
		<Block>
			<p className="info">Choose whether you want to select notes or chords</p>
			<div className="buttons">
				<button onClick={notesClickledHandler} className="btn">
					Notes
				</button>
				<button onClick={chordsClickledHandler} className="btn">
					Chords
				</button>
			</div>
		</Block>
	);
}

export default SelectionPanel;
