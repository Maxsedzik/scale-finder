import React, { useContext } from "react";
import Block from "./shared/Block";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a from "../assets/notes/a.wav";
import ais from "../assets/notes/asharp.wav";
import b from "../assets/notes/b.wav";
import c from "../assets/notes/c.wav";
import cis from "../assets/notes/csharp.wav";
import d from "../assets/notes/d.wav";
import dis from "../assets/notes/dsharp.wav";
import e from "../assets/notes/e.wav";
import f from "../assets/notes/f.wav";
import fis from "../assets/notes/fsharp.wav";
import g from "../assets/notes/g.wav";
import gis from "../assets/notes/gsharp.wav";
import { FaMusic } from "react-icons/fa";
import AppContext from "../context/AppContext";

function NotesPanel() {
	const {
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
		clearNotes,
	} = useContext(AppContext);

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
