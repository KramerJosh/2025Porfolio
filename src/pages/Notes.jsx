import React, { useState, useMemo } from "react";
import ChordSelector from "../components/ChordSelector";
import ChordInfoTable from "../components/ChordInfoTable";
import PlayButton from "../components/PlayButton";
import * as Tone from "tone";

const getNoteFrequency = (noteName) => {
  return Tone.Frequency(noteName).toFrequency();
};

const getChordNotes = (root, type, octave) => {
  const chords = {
    Major: [0, 4, 7],
    Minor: [0, 3, 7],
    Sus2: [0, 2, 7],
    Sus4: [0, 5, 7],
    Maj7: [0, 4, 7, 11],
    Min7: [0, 3, 7, 10],
    "7": [0, 4, 7, 10],
    Aug: [0, 4, 8],
    Dim: [0, 3, 6],
    Add6: [0, 4, 7, 9],
    Add9: [0, 2, 4, 7],
  };

  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const rootIndex = notes.indexOf(root);
  const chordIntervals = chords[type] || [];

  return chordIntervals.map((interval) => {
    const noteIndex = (rootIndex + interval) % 12;
    const octaveShift = Math.floor((rootIndex + interval) / 12);
    const finalOctave = octave + octaveShift;
    const noteName = notes[noteIndex] + finalOctave;
    const midi = Tone.Frequency(noteName).toMidi();
    const frequency = getNoteFrequency(noteName);
    return { name: noteName, midi, frequency };
  });
};

export default function Notes() {
  const [rootNote, setRootNote] = useState("C");
  const [chordType, setChordType] = useState("Major");
  const [synthType, setSynthType] = useState("Synth");
  const [octave, setOctave] = useState(4);

  const chordNotes = useMemo(
    () => getChordNotes(rootNote, chordType, octave),
    [rootNote, chordType, octave]
  );

  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Chord Picker</h1>

      <ChordSelector
        rootNote={rootNote}
        setRootNote={setRootNote}
        chordType={chordType}
        setChordType={setChordType}
        synthType={synthType}
        setSynthType={setSynthType}
        octave={octave}
        setOctave={setOctave}
      />

      <ChordInfoTable chordNotes={chordNotes} />

      <PlayButton chordNotes={chordNotes} synthType={synthType} />
    </div>
  );
}
