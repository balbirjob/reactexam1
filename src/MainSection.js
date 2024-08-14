// // src/MainSection.js
// import React from 'react';
// import './MainSection.css';

// function MainSection() {
//   return (
//     <div className="main-section">
//       <h2>Welcome to Pocket Notes</h2>
//       <p>Select a label to view or add notes.</p>
//     </div>
//   );
// }

// export default MainSection;

// src/MainSection.js

// import React, { useState } from 'react';
// import './MainSection.css';

// function MainSection({ selectedLabel }) {
//   const [notes, setNotes] = useState('');
//   const [noteContent, setNoteContent] = useState('');

//   const handleSaveNote = () => {
//     if (selectedLabel) {
//       setNotes({ ...notes, [selectedLabel.name]: noteContent });
//       setNoteContent('');
//     }
//   };

//   return (
//     <div className="main-section">
//       {selectedLabel ? (
//         <>
//           <h2>{selectedLabel.name}</h2>
//           <textarea 
//             value={noteContent}
//             onChange={(e) => setNoteContent(e.target.value)}
//             placeholder="Write your note here..."
//           />
//           <button onClick={handleSaveNote}>Save Note</button>
//           {notes[selectedLabel.name] && (
//             <div className="note">
//               <h3>Saved Note:</h3>
//               <p>{notes[selectedLabel.name]}</p>
//             </div>
//           )}
//         </>
//       ) : (
//         <p>Select a label to view or add notes.</p>
//       )}
//     </div>
//   );
// }

// export default MainSection;

import React, { useState } from 'react';
import './MainSection.css';
import ima from './assets/mainbar.png';

function MainSection({ selectedLabel }) {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
      text: noteText,
      date: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const noteText = e.target.elements.noteInput.value;
    if (noteText.trim()) {
      addNote(noteText);
      e.target.elements.noteInput.value = '';
    }
  };

  return (
    <div className="main-section">
      {selectedLabel ? (
        <>
          <h2>{selectedLabel.name}</h2>
          <form onSubmit={handleNoteSubmit}>
            <input
              type="text"
              name="noteInput"
              placeholder="Add a note..."
              className="note-input"
            />
            <button type="submit" className="note-submit-btn">Add Note</button>
          </form>
          <ul className="notes-list">
            {notes.map((note, index) => (
              <li key={index}>
                <p>{note.text}</p>
                <span className="note-date">{note.date}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="second">
        <img src={ima} className="bimage" alt="logo" /> 
        <p className="mh">Pocket Notes</p>
        <p className="mp"> Send and receive messages without keeping your phone online.</p>
        <p className="mp">Use Pocket Notes on up to 4 linked devicesand 1 mobile phone</p>
        </div>
      )}
    </div>
  );
}

export default MainSection;