import React, { useState, useMemo } from "react";
import ChordSelector from "../components/ChordSelector";
import ChordInfoTable from "../components/ChordInfoTable";
import PlayButton from "../components/PlayButton";
import * as Tone from "tone";

const getNoteFrequency = (noteName) => {
  return Tone.Frequency(noteName).toFrequency();
};

const enharmonicMap = [
  "C", "C#/Db", "D", "D#/Eb", "E", "F",
  "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"
];

const noteBaseNames = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B"
];

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

  // Normalize root from "C#/Db" to "C#"
  const normalizedRoot = root.split("/")[0];
  const rootIndex = noteBaseNames.indexOf(normalizedRoot);
  const chordIntervals = chords[type] || [];

  return chordIntervals.map((interval) => {
    const noteIndex = (rootIndex + interval) % 12;
    const octaveShift = Math.floor((rootIndex + interval) / 12);
    const finalOctave = octave + octaveShift;
    const displayName = enharmonicMap[noteIndex] + finalOctave;
    const toneName = noteBaseNames[noteIndex] + finalOctave;
    const frequency = getNoteFrequency(toneName);
    const midi = Tone.Frequency(toneName).toMidi();

    return { name: displayName, midi, frequency };
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
      <div className="w-1/2 text-center mb-5">
        <p>This tool can be used to figure out the MIDI values and frequencies in Hz for all of the common 3- and 4-note chords used in Western classical music. Enharmonic equivalents are displayed, and all frequencies are given in equal temperament with A = 440 Hz.</p>
      </div>
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
