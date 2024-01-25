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
		chordsMarking,
		notesSelected,
		chordsSelected,
	} = useContext(AppContext);
	return (
		<Block>
			{aminorResult && (
				<div className="result-scale">
					<h2>A minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(aminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(aminor)}</ul>
					)}
				</div>
			)}
			{aisminorResult && (
				<div className="result-scale">
					<h2>A# minor</h2>

					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(aisminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(aisminor)}</ul>
					)}
				</div>
			)}
			{bminorResult && (
				<div className="result-scale">
					<h2>B minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(bminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(bminor)}</ul>
					)}
				</div>
			)}
			{cminorResult && (
				<div className="result-scale">
					<h2>C minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(cminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(cminor)}</ul>
					)}
				</div>
			)}

			{cisminorResult && (
				<div className="result-scale">
					<h2>C# minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(cisminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(cisminor)}</ul>
					)}
				</div>
			)}
			{dminorResult && (
				<div className="result-scale">
					<h2>D minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(dminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(dminor)}</ul>
					)}
				</div>
			)}
			{disminorResult && (
				<div className="result-scale">
					<h2>D# minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(disminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(disminor)}</ul>
					)}
				</div>
			)}
			{eminorResult && (
				<div className="result-scale">
					<h2>E minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(eminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(eminor)}</ul>
					)}
				</div>
			)}
			{fminorResult && (
				<div className="result-scale">
					<h2>F minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(fminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(fminor)}</ul>
					)}
				</div>
			)}
			{fisminorResult && (
				<div className="result-scale">
					<h2>F# minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(fisminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(fisminor)}</ul>
					)}
				</div>
			)}
			{gminorResult && (
				<div className="result-scale">
					<h2>G minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(gminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(gminor)}</ul>
					)}
				</div>
			)}
			{gisminorResult && (
				<div className="result-scale">
					<h2>G# minor</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(gisminor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(gisminor)}</ul>
					)}
				</div>
			)}
			{amajorResult && (
				<div className="result-scale">
					<h2>A major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(amajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(amajor)}</ul>
					)}
				</div>
			)}
			{aismajorResult && (
				<div className="result-scale">
					<h2>A# major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(aismajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(aismajor)}</ul>
					)}
				</div>
			)}
			{bmajorResult && (
				<div className="result-scale">
					<h2>B major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(bmajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(bmajor)}</ul>
					)}
				</div>
			)}
			{cmajorResult && (
				<div className="result-scale">
					<h2>C major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(cmajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(cmajor)}</ul>
					)}
				</div>
			)}
			{cismajorResult && (
				<div className="result-scale">
					<h2>C# major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(cismajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(cismajor)}</ul>
					)}
				</div>
			)}
			{dmajorResult && (
				<div className="result-scale">
					<h2>D major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(dmajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(dmajor)}</ul>
					)}
				</div>
			)}
			{dismajorResult && (
				<div className="result-scale">
					<h2>D# major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(dismajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(dismajor)}</ul>
					)}
				</div>
			)}
			{emajorResult && (
				<div className="result-scale">
					<h2>E major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(emajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(emajor)}</ul>
					)}
				</div>
			)}
			{fmajorResult && (
				<div className="result-scale">
					<h2>F major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(fmajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(fmajor)}</ul>
					)}
				</div>
			)}
			{fismajorResult && (
				<div className="result-scale">
					<h2>F# major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(fismajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(fismajor)}</ul>
					)}
				</div>
			)}
			{gmajorResult && (
				<div className="result-scale">
					<h2>G major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(gmajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(gmajor)}</ul>
					)}
				</div>
			)}
			{gismajorResult && (
				<div className="result-scale">
					<h2>G# major</h2>
					{notesSelected && (
						<ul className="result-scale-list">{notesMarking(gismajor)}</ul>
					)}
					{chordsSelected && (
						<ul className="result-scale-list">{chordsMarking(gismajor)}</ul>
					)}
				</div>
			)}
			{!isResult && <h2>No scale matches your notes</h2>}
		</Block>
	);
};

export default Results;
