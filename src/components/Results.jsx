import React, { useContext } from "react";
import Block from "./shared/Block";
import AppContext from "../context/AppContext";

const Results = ({}) => {
	const {
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
		isResult,
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
		notesMarking,
	} = useContext(AppContext);
	return (
		<Block>
			{aminorResult && (
				<div className="result-scale">
					<h2>A minor</h2>
					<ul className="result-scale-list">{notesMarking(aminor)}</ul>
				</div>
			)}
			{aisminorResult && (
				<div className="result-scale">
					<h2>A# minor</h2>
					<ul className="result-scale-list">{notesMarking(aisminor)}</ul>
				</div>
			)}
			{bminorResult && (
				<div className="result-scale">
					<h2>B minor</h2>
					<ul className="result-scale-list">{notesMarking(bminor)}</ul>
				</div>
			)}
			{cminorResult && (
				<div className="result-scale">
					<h2>C minor</h2>
					<ul className="result-scale-list">{notesMarking(cminor)}</ul>
				</div>
			)}

			{cisminorResult && (
				<div className="result-scale">
					<h2>C# minor</h2>
					<ul className="result-scale-list">{notesMarking(cisminor)}</ul>
				</div>
			)}
			{dminorResult && (
				<div className="result-scale">
					<h2>D minor</h2>
					<ul className="result-scale-list">{notesMarking(dminor)}</ul>
				</div>
			)}
			{disminorResult && (
				<div className="result-scale">
					<h2>D# minor</h2>
					<ul className="result-scale-list">{notesMarking(disminor)}</ul>
				</div>
			)}
			{eminorResult && (
				<div className="result-scale">
					<h2>E minor</h2>
					<ul className="result-scale-list">{notesMarking(eminor)}</ul>
				</div>
			)}
			{fminorResult && (
				<div className="result-scale">
					<h2>F minor</h2>
					<ul className="result-scale-list">{notesMarking(fminor)}</ul>
				</div>
			)}
			{fisminorResult && (
				<div className="result-scale">
					<h2>F# minor</h2>
					<ul className="result-scale-list">{notesMarking(fisminor)}</ul>
				</div>
			)}
			{gminorResult && (
				<div className="result-scale">
					<h2>G minor</h2>
					<ul className="result-scale-list">{notesMarking(gminor)}</ul>
				</div>
			)}
			{gisminorResult && (
				<div className="result-scale">
					<h2>G# minor</h2>
					<ul className="result-scale-list">{notesMarking(gisminor)}</ul>
				</div>
			)}
			{amajorResult && (
				<div className="result-scale">
					<h2>A major</h2>
					<ul className="result-scale-list">{notesMarking(amajor)}</ul>
				</div>
			)}
			{aismajorResult && (
				<div className="result-scale">
					<h2>A# major</h2>
					<ul className="result-scale-list">{notesMarking(aismajor)}</ul>
				</div>
			)}
			{bmajorResult && (
				<div className="result-scale">
					<h2>B major</h2>
					<ul className="result-scale-list">{notesMarking(bmajor)}</ul>
				</div>
			)}
			{cmajorResult && (
				<div className="result-scale">
					<h2>C major</h2>
					<ul className="result-scale-list">{notesMarking(cmajor)}</ul>
				</div>
			)}
			{cismajorResult && (
				<div className="result-scale">
					<h2>C# major</h2>
					<ul className="result-scale-list">{notesMarking(cismajor)}</ul>
				</div>
			)}
			{dmajorResult && (
				<div className="result-scale">
					<h2>D major</h2>
					<ul className="result-scale-list">{notesMarking(dmajor)}</ul>
				</div>
			)}
			{dismajorResult && (
				<div className="result-scale">
					<h2>D# major</h2>
					<ul className="result-scale-list">{notesMarking(dismajor)}</ul>
				</div>
			)}
			{emajorResult && (
				<div className="result-scale">
					<h2>E major</h2>
					<ul className="result-scale-list">{notesMarking(emajor)}</ul>
				</div>
			)}
			{fmajorResult && (
				<div className="result-scale">
					<h2>F major</h2>
					<ul className="result-scale-list">{notesMarking(fmajor)}</ul>
				</div>
			)}
			{fismajorResult && (
				<div className="result-scale">
					<h2>F# major</h2>
					<ul className="result-scale-list">{notesMarking(fismajor)}</ul>
				</div>
			)}
			{gmajorResult && (
				<div className="result-scale">
					<h2>G major</h2>
					<ul className="result-scale-list">{notesMarking(gmajor)}</ul>
				</div>
			)}
			{gismajorResult && (
				<div className="result-scale">
					<h2>G# major</h2>
					<ul className="result-scale-list">{notesMarking(gismajor)}</ul>
				</div>
			)}
			{!isResult && <h2>No scale matches your notes</h2>}
		</Block>
	);
};

export default Results;
