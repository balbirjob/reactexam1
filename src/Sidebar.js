// // src/Sidebar.js
// import React ,{ useState } from 'react';
// import './Sidebar.css';
// import Modal from './Modal';

// function Sidebar({ labels = [], addLabel }) { // Add a default value for labels
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const handleAddLabel = (labelName, labelColor) => {
//     addLabel({ name: labelName, color: labelColor });
//     closeModal();
//   };

//   return (
//     <div className="sidebar">
//       <h1>Pocket Notes</h1>
//       <button className="add-label-btn" onClick={openModal}>Add Label</button>
//       <ul className="labels-list">
//         {labels.map((label, index) => (
//           <li key={index} style={{ backgroundColor: label.color }}>
//             {label.name.split(' ').map(word => word[0]).join('')}
//           </li>
//         ))}
//       </ul>
//       {isModalOpen && <Modal onClose={closeModal} onAddLabel={handleAddLabel} />}
//     </div>
//   );
// }

// export default Sidebar;

// src/Sidebar.js
// import React, { useState } from 'react';
// import './Sidebar.css';
// import Modal from './Modal';

// function Sidebar({ labels = [], addLabel, selectLabel }) {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const handleAddLabel = (labelName, labelColor) => {
//     addLabel({ name: labelName, color: labelColor });
//     closeModal();
//   };

//   return (
//     <div className="sidebar">
//       <h1>Pocket Notes</h1>
//       <button className="add-label-btn" onClick={openModal}>Add Label</button>
//       <ul className="labels-list">
//         {labels.map((label, index) => (
//           <li 
//             key={index} 
//             style={{ backgroundColor: label.color }} 
//             onClick={() => selectLabel(label)} // Handle label click
//           >
//             {label.name.split(' ').map(word => word[0]).join('')}
//           </li>
//         ))}
//       </ul>
//       {isModalOpen && <Modal onClose={closeModal} onAddLabel={handleAddLabel} />}
//     </div>
//   );
// }

// export default Sidebar;

// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import Modal from './Modal';

function Sidebar({ labels = [], addLabel, selectLabel }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddLabel = (labelName, labelColor) => {
    addLabel({ name: labelName, color: labelColor });
    closeModal();
  };

  return (
    <div className="sidebar">
      <h1>Pocket Notes</h1>
      <button className="add-label-btn" onClick={openModal}>+</button>
      <ul className="labels-list">
        {labels.map((label, index) => (
          <li
            key={index}
            style={{ backgroundColor: label.color }}
            onClick={() => selectLabel(label)}
            className="label-item"
          >
            {label.name.split(' ').map(word => word[0]).join('')}
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal onClose={closeModal} onAddLabel={handleAddLabel} />}
    </div>
  );
}

export default Sidebar;
