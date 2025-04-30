import React from "react";

const rootNotes = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B"
];

const chordTypes = [
  "Major", "Minor", "Sus2", "Sus4", "Maj7",
  "Min7", "7", "Aug", "Dim", "Add6", "Add9"
];

const synthTypes = [
  "Synth-1", "Synth-2", "Synth-3", "Synth-4"
];

export default function ChordSelector({
  rootNote,
  setRootNote,
  chordType,
  setChordType,
  synthType,
  setSynthType,
  octave,
  setOctave,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mb-6">
      {/* Root Note Picker */}
      <div>
        <label htmlFor="root-select" className="block font-medium mb-1">Root Note:</label>
        <select
          id="root-select"
          value={rootNote}
          onChange={(e) => setRootNote(e.target.value)}
          className="select select-bordered w-full"
        >
          {rootNotes.map((note) => (
            <option key={note} value={note}>{note}</option>
          ))}
        </select>
      </div>

      {/* Chord Type Picker */}
      <div>
        <label htmlFor="chord-type-select" className="block font-medium mb-1">Chord Type:</label>
        <select
          id="chord-type-select"
          value={chordType}
          onChange={(e) => setChordType(e.target.value)}
          className="select select-bordered w-full"
        >
          {chordTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Octave Picker */}
      <div>
        <label htmlFor="octave-select" className="block font-medium mb-1">Octave:</label>
        <select
          id="octave-select"
          value={octave}
          onChange={(e) => setOctave(parseInt(e.target.value))}
          className="select select-bordered w-full"
        >
          {[1, 2, 3, 4, 5, 6].map((oct) => (
            <option key={oct} value={oct}>{oct}</option>
          ))}
        </select>
      </div>

      {/* Synth Type Picker */}
      <div>
        <label htmlFor="synth-picker" className="block font-medium mb-1">Synth Type:</label>
        <select
          id="synth-picker"
          value={synthType}
          onChange={(e) => setSynthType(e.target.value)}
          className="select select-bordered w-full"
        >
          {synthTypes.map((synth) => (
            <option key={synth} value={synth}>{synth}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
