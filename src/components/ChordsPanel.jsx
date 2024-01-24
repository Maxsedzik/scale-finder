import React, { useContext } from "react";
import Block from "./shared/Block";
import AppContext from "../context/AppContext";
import { FaMusic } from "react-icons/fa";
import cmaj from "../assets/chords/cchord.wav";
import cismaj from "../assets/chords/csharpchord.wav";
import dmaj from "../assets/chords/dchord.wav";
import dismaj from "../assets/chords/dsharpchord.wav";
import emaj from "../assets/chords/echord.wav";
import fmaj from "../assets/chords/fchord.wav";
import fismaj from "../assets/chords/fsharpchord.wav";
import gmaj from "../assets/chords/gchord.wav";
import gismaj from "../assets/chords/gsharpchord.wav";
import amaj from "../assets/chords/achord.wav";
import aismaj from "../assets/chords/asharpchord.wav";
import bmaj from "../assets/chords/bchord.wav";

import cmin from "../assets/chords/cmchord.wav";
import cismin from "../assets/chords/csharpmchord.wav";
import dmin from "../assets/chords/dmchord.wav";
import dismin from "../assets/chords/dsharpmchord.wav";
import emin from "../assets/chords/emchord.wav";
import fmin from "../assets/chords/fmchord.wav";
import fismin from "../assets/chords/fsharpmchord.wav";
import gmin from "../assets/chords/gmchord.wav";
import gismin from "../assets/chords/gsharpmchord.wav";
import amin from "../assets/chords/amchord.wav";
import aismin from "../assets/chords/asharpmchord.wav";
import bmin from "../assets/chords/bmchord.wav";

function ChordsPanel() {
	const {
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
		playSound,
	} = useContext(AppContext);

	return (
		<Block>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("C", setCchord, cchord)}
						className={cchord ? "btn-note-selected" : "btn-note"}>
						C
					</button>
					<button className="btn-sound" onClick={() => playSound(cmaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("C#", setCischord, cischord)}
						className={cischord ? "btn-note-selected" : "btn-note"}>
						C#
					</button>
					<button className="btn-sound" onClick={() => playSound(cismaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("D", setDchord, dchord)}
						className={dchord ? "btn-note-selected" : "btn-note"}>
						D
					</button>
					<button className="btn-sound" onClick={() => playSound(dmaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("D#", setDischord, dischord)}
						className={dischord ? "btn-note-selected" : "btn-note"}>
						D#
					</button>
					<button className="btn-sound" onClick={() => playSound(dismaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("E", setEchord, echord)}
						className={echord ? "btn-note-selected" : "btn-note"}>
						E
					</button>
					<button className="btn-sound" onClick={() => playSound(emaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("F", setFchord, fchord)}
						className={fchord ? "btn-note-selected" : "btn-note"}>
						F
					</button>
					<button className="btn-sound" onClick={() => playSound(fmaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("F#", setFischord, fischord)}
						className={fischord ? "btn-note-selected" : "btn-note"}>
						F#
					</button>
					<button className="btn-sound" onClick={() => playSound(fismaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("G", setGchord, gchord)}
						className={gchord ? "btn-note-selected" : "btn-note"}>
						G
					</button>
					<button className="btn-sound" onClick={() => playSound(gmaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("G#", setGischord, gischord)}
						className={gischord ? "btn-note-selected" : "btn-note"}>
						G#
					</button>
					<button className="btn-sound" onClick={() => playSound(gismaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("A", setAchord, achord)}
						className={achord ? "btn-note-selected" : "btn-note"}>
						A
					</button>
					<button className="btn-sound" onClick={() => playSound(amaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("A#", setAischord, aischord)}
						className={aischord ? "btn-note-selected" : "btn-note"}>
						A#
					</button>
					<button className="btn-sound" onClick={() => playSound(aismaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("B", setBchord, bchord)}
						className={bchord ? "btn-note-selected" : "btn-note"}>
						B
					</button>
					<button className="btn-sound" onClick={() => playSound(bmaj)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("Cm", setCmchord, cmchord)}
						className={cmchord ? "btn-note-selected" : "btn-note"}>
						Cm
					</button>
					<button className="btn-sound" onClick={() => playSound(cmin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("C#m", setCismchord, cismchord)}
						className={cismchord ? "btn-note-selected" : "btn-note"}>
						C#m
					</button>
					<button className="btn-sound" onClick={() => playSound(cismin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("Dm", setDmchord, dmchord)}
						className={dmchord ? "btn-note-selected" : "btn-note"}>
						Dm
					</button>
					<button className="btn-sound" onClick={() => playSound(dmin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("D#m", setDismchord, dismchord)}
						className={dismchord ? "btn-note-selected" : "btn-note"}>
						D#m
					</button>
					<button className="btn-sound" onClick={() => playSound(dismin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("Em", setEmchord, emchord)}
						className={emchord ? "btn-note-selected" : "btn-note"}>
						Em
					</button>
					<button className="btn-sound" onClick={() => playSound(emin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("Fm", setFmchord, fmchord)}
						className={fmchord ? "btn-note-selected" : "btn-note"}>
						Fm
					</button>
					<button className="btn-sound" onClick={() => playSound(fmin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("F#m", setFismchord, fismchord)}
						className={fismchord ? "btn-note-selected" : "btn-note"}>
						F#m
					</button>
					<button className="btn-sound" onClick={() => playSound(fismin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("G", setGmchord, gmchord)}
						className={gmchord ? "btn-note-selected" : "btn-note"}>
						Gm
					</button>
					<button className="btn-sound" onClick={() => playSound(gmin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => chordClicked("G#m", setGismchord, gismchord)}
						className={gismchord ? "btn-note-selected" : "btn-note"}>
						G#m
					</button>
					<button className="btn-sound" onClick={() => playSound(gismin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("Am", setAmchord, amchord)}
						className={amchord ? "btn-note-selected" : "btn-note"}>
						Am
					</button>
					<button className="btn-sound" onClick={() => playSound(amin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("A#m", setAismchord, aismchord)}
						className={aismchord ? "btn-note-selected" : "btn-note"}>
						A#m
					</button>
					<button className="btn-sound" onClick={() => playSound(aismin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => chordClicked("Bm", setBmchord, bmchord)}
						className={bmchord ? "btn-note-selected" : "btn-note"}>
						Bm
					</button>
					<button className="btn-sound" onClick={() => playSound(bmin)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>

			<div className="cleaner">
				<button onClick={clearChords} className="btn-clear btn">
					CLEAR
				</button>
			</div>
		</Block>
	);
}

export default ChordsPanel;
