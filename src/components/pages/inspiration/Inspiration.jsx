// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Card from "../card/Card"; // Путь к файлу Card.jsx в той же папке
// import CardDetail from "../details/CardDetail"; // Путь к файлу CardDetail.jsx в той же папке

// const cardsData = [
//   { id: 1, title: "Card 1", description: "Description for card 1" },
//   { id: 2, title: "Card 2", description: "Description for card 2" },
//   { id: 3, title: "Card 3", description: "Description for card 3" },
// ];

// const Inspiration = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Inspiration</h1>
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {cardsData.map((card) => (
//             <Card
//               key={card.id}
//               id={card.id}
//               title={card.title}
//               description={card.description}
//             />
//           ))}
//         </div>
//         <Routes>
//           <Route path="/inspiration/:id" element={<CardDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Inspiration;

import React from "react";

const Inspiration = () => {
  return <div>Inspiration</div>;
};

export default Inspiration;
