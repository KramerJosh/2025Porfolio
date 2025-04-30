import React from "react";

export default function ChordInfoTable({ chordNotes }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table table-zebra w-full max-w-xl mx-auto text-center">
        <thead>
          <tr>
            <th>Note</th>
            <th>MIDI</th>
            <th>Frequency (Hz)</th>
          </tr>
        </thead>
        <tbody>
          {chordNotes.map((note, index) => (
            <tr key={index}>
              <td>{note.name}</td>
              <td>{note.midi}</td>
              <td>{note.frequency.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
