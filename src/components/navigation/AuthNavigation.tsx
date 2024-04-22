import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
// import Login from "../../pages/auth/Login";

function StackNavigation() {
  return (
        <Routes>
            {/* <Route path="/" element={ <Login /> } /> */}
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
  );
}

export default StackNavigation;
