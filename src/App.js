import TopLine from './components/Header/TopLine/TopLine' 
import SecondLine from './components/Header/SecondLine/SecondLine';
import './App.scss';
import FirstSection from './components/Main/FirstSection/FirstSection';
import SecondSection from './components/Main/SecondSection/SecondSection';
import ThirdSection from './components/Main/ThirdSection/ThirdSection';
import ForSection from './components/Main/ForSection/ForSection';
import FiveSection from './components/Main/FiveSection/FiveSection';
import SixSection from './components/Main/SixSection/SixSection';
import FirstLine from './components/Footer/FirstLine/FirstLine';
import SecondLineF from './components/Footer/SecondLine/SecondLineF';
import ThirdLine from './components/Footer/ThirdLine/ThirdLine';


function App() {
  return (
    <div className="App">
      <TopLine />
      <SecondLine />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForSection />
      <FiveSection />
      <SixSection />
      <FirstLine />
      <SecondLineF />
      <ThirdLine />
      
    </div>
  );
}

export default App;













// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TopLine from './components/Header/TopLine/TopLine';
// import SecondLine from './components/Header/SecondLine/SecondLine';
// import './App.css';
// import FirstSection from './components/Main/FirstSection/FirstSection';
// import SecondSection from './components/Main/SecondSection/SecondSection';
// import ThirdSection from './components/Main/ThirdSection/ThirdSection';
// import ForSection from './components/Main/ForSection/ForSection';
// import FiveSection from './components/Main/FiveSection/FiveSection';
// import SixSection from './components/Main/SixSection/SixSection';
// import FirstLine from './components/Footer/FirstLine/FirstLine';
// import SecondLineF from './components/Footer/SecondLine/SecondLineF';
// import ThirdLine from './components/Footer/ThirdLine/ThirdLine';
// import LikedPage from './pages/LikedPage';
// import ProfilePage from './pages/ProfilePage';
// import SettingsPage from './pages/SettingsPage';
// import CartPage from './pages/CartPage';
// import SearchPage from './pages/SearchPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <TopLine />
//         <SecondLine />

//         <Routes>
//           {/* Главная страница */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <FirstSection />
//                 <SecondSection />
//                 <ThirdSection />
//                 <ForSection />
//                 <FiveSection />
//                 <SixSection />
//               </>
//             }
//           />

//           <Route path="/liked" element={<LikedPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/settings" element={<SettingsPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/search" element={<SearchPage />} />
//         </Routes>

 
//         <FirstLine />
//         <SecondLineF />
//         <ThirdLine />
//       </div>
//     </Router>
//   );
// }

// export default App;
