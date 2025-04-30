import React from "react";
import * as Tone from "tone";

export default function PlayButton({ chordNotes, synthType }) {
  const handlePlay = async () => {
    await Tone.start();

    // Setup effects
    const reverb = new Tone.Reverb({ decay: 6, preDelay: 0.01, wet: 0.6 });
    await reverb.generate(); // Wait for impulse response
    const chorus = new Tone.Chorus(4, 2.5, 0.3).start();
    chorus.wet.value = 0.5;
    const filter = new Tone.Filter(1000, "lowpass");

    // Setup synth
    let synth;
    let isPolyphonic = true;

    switch (synthType) {
      case "Synth-2":
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: "square" },
          envelope: { attack: 1, decay: 0.5, sustain: 0.7, release: 2 },
          volume: -12,
        });
        isPolyphonic = true;
        break;
      case "Synth-3":
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: "triangle" },
          envelope: { attack: 1, decay: 0.5, sustain: 0.7, release: 2 },
          volume: -12,
        });
        isPolyphonic = true;
        break;
      case "Synth-4":
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: "sine" },
          envelope: { attack: 1, decay: 0.5, sustain: 0.7, release: 2 },
          volume: -12,
        });
        isPolyphonic = true;
        break;
      default:
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: "sawtooth" },
          envelope: { attack: 1, decay: 0.5, sustain: 0.7, release: 2 },
          volume: -12,
        });
        isPolyphonic = true;
    }

    // Chain effects
    synth.chain(chorus, filter, reverb, Tone.Destination);

    // Extract note names
    const notes = chordNotes.map((note) =>
      Tone.Frequency(note.midi, "midi").toNote()
    );
    console.log("Notes to play:", notes);

    // Play notes
    if (isPolyphonic) {
      synth.triggerAttackRelease(notes, 2); // PolySynth can handle chords
    } else {
      notes.forEach((note, i) => {
        synth.triggerAttackRelease(note, 2, Tone.now() + i * 0.02); // Slight stagger to avoid overlap issues
      });
    }

    // Dispose after playback
    setTimeout(() => {
      synth.dispose();
      chorus.dispose();
      filter.dispose();
      reverb.dispose();
    }, 5000);
  };

  return (
    <button
      className="btn btn-primary mt-4"
      onClick={handlePlay}
      disabled={!chordNotes || chordNotes.length === 0}
    >
      Play Chord
    </button>
  );
}
