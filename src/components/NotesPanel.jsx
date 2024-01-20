import React from "react";
import Block from "./shared/Block";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a from "../assets/a.wav";
import ais from "../assets/asharp.wav";
import b from "../assets/b.wav";
import c from "../assets/c.wav";
import cis from "../assets/csharp.wav";
import d from "../assets/d.wav";
import dis from "../assets/dsharp.wav";
import e from "../assets/e.wav";
import f from "../assets/f.wav";
import fis from "../assets/fsharp.wav";
import g from "../assets/g.wav";
import gis from "../assets/gsharp.wav";
import { FaMusic } from "react-icons/fa";

function NotesPanel({
	setNotesToCompare,
	notesToCompare,
	setAminorResult,
	setAisminorResult,
	setBminorResult,
	setCminorResult,
	setCisminorResult,
	setDminorResult,
	setDisminorResult,
	setEminorResult,
	setFminorResult,
	setFisminorResult,
	setGminorResult,
	setGisminorResult,
	setAmajorResult,
	setAismajorResult,
	setBmajorResult,
	setCmajorResult,
	setCismajorResult,
	setDmajorResult,
	setDismajorResult,
	setEmajorResult,
	setFmajorResult,
	setFismajorResult,
	setGmajorResult,
	setGismajorResult,
	setIsResult,
}) {
	const [notesRequired, setNotesRequired] = useState(3);

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

	function noteClicked(note, setNote, stateOfNote) {
		if (!stateOfNote) {
			setNote(true);
			setNotesToCompare((notesToCompare) => [...notesToCompare, note]);
			setNotesRequired((notesRequired) => (notesRequired -= 1));
		} else {
			setNote(false);
			setNotesToCompare(notesToCompare.filter((e) => e != note));
			setNotesRequired((notesRequired) => (notesRequired += 1));
		}
	}

	function playSound(note) {
		new Audio(note).play();
	}

	return (
		<Block>
			{notesRequired >= 2 && (
				<p className="info">
					You must select at least {notesRequired} more notes
				</p>
			)}
			{notesRequired === 1 && (
				<p className="info">You must select one more note</p>
			)}

			{notesRequired <= 0 && (
				<p style={{ opacity: 0 }} className="info">
					You must select one more note
				</p>
			)}

			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("C", setCnote, cnote);
						}}
						className={cnote ? "btn-note-selected" : "btn-note"}>
						C
					</button>

					<button className="btn-sound" onClick={() => playSound(c)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("C#", setCisnote, cisnote);
						}}
						className={cisnote ? "btn-note-selected" : "btn-note"}>
						C#
					</button>

					<button className="btn-sound" onClick={() => playSound(cis)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("D", setDnote, dnote);
						}}
						className={dnote ? "btn-note-selected" : "btn-note"}>
						D
					</button>

					<button className="btn-sound" onClick={() => playSound(d)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("D#", setDisnote, disnote);
						}}
						className={disnote ? "btn-note-selected" : "btn-note"}>
						D#
					</button>

					<button className="btn-sound" onClick={() => playSound(dis)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("E", setEnote, enote);
						}}
						className={enote ? "btn-note-selected" : "btn-note"}>
						E
					</button>

					<button className="btn-sound" onClick={() => playSound(e)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("F", setFnote, fnote);
						}}
						className={fnote ? "btn-note-selected" : "btn-note"}>
						F
					</button>

					<button className="btn-sound" onClick={() => playSound(f)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("F#", setFisnote, fisnote);
						}}
						className={fisnote ? "btn-note-selected" : "btn-note"}>
						F#
					</button>

					<button className="btn-sound" onClick={() => playSound(fis)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("G", setGnote, gnote);
						}}
						className={gnote ? "btn-note-selected" : "btn-note"}>
						G
					</button>

					<button className="btn-sound" onClick={() => playSound(g)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>
			<ul className="notes-list">
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("G#", setGisnote, gisnote);
						}}
						className={gisnote ? "btn-note-selected" : "btn-note"}>
						G#
					</button>

					<button className="btn-sound" onClick={() => playSound(gis)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("A", setAnote, anote);
						}}
						className={anote ? "btn-note-selected" : "btn-note"}>
						A
					</button>

					<button className="btn-sound" onClick={() => playSound(a)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("A#", setAisnote, aisnote);
						}}
						className={aisnote ? "btn-note-selected" : "btn-note"}>
						A#
					</button>

					<button className="btn-sound" onClick={() => playSound(ais)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
				<li className="note-element">
					<button
						onClick={() => {
							noteClicked("B", setBnote, bnote);
						}}
						className={bnote ? "btn-note-selected" : "btn-note"}>
						B
					</button>

					<button className="btn-sound" onClick={() => playSound(b)}>
						<FaMusic color="#f4f4f4" />
					</button>
				</li>
			</ul>

			<div className="cleaner">
				<button onClick={clearNotes} className="btn-clear btn">
					CLEAR
				</button>
			</div>
		</Block>
	);
}

export default NotesPanel;
