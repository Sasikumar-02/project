import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductLayout from '../ProductLayout';
// import ExecutiveSummary from '../../pages/sales/ExecutiveSummary';
// import UserLevelAnalysis from '../../pages/userLevelAnalysis/UserLevelAnalysis';
// import ProductSummary from '../../pages/productSummary/productSummary';
// import { SalesCustomer } from '../../pages/sales/SalesCustomer';
// import { Home } from '../../pages/home/Home';
// import { NewHome } from '../../pages/home/NewHome';
//import PatientDashBoard from '../../pages/Patient/DashBoard/DashBoard'
//import PatientView from '../../pages/Patient/PatientView/Patientview'
//import PatientDetails from '../../pages/Patient/PatientDetails/PatientDetails';
import ServerDashboard from '../../Cyber/Server/ServerDashboard';
import FileSystemDashboard from '../../Cyber/FileSystem/FileSystemDashboard' 
import RiskDashboard from '../../Cyber/Risk/RiskDashboard' 
import GenAI from '../../Cyber/GenAI/GenAI';
import SecurityAnalysis from '../../Cyber/Security/SecurityAnalysis';
import WebChat from '../WebChat/WebChat';
import WebChatbot from '../WebChat/WebChatbot';
import ChatBox from '../WebChat/ChatBox';

const ProductNavigation=()=> {  
  return (
    <ProductLayout>
        <Routes>   
            <Route path='/' element={ <Navigate to="/cpp/newhome" /> } />
            <Route path='*' element={ <Navigate to="/cpp/newhome" /> } />
            {/* <Route path='/cpp/home' element={<Home />} />
            <Route path='/cpp/newhome' element={<NewHome />} />
            <Route path='/cpp/userAnalysis' element={<UserLevelAnalysis />} />
            <Route path='/cpp/productSupport' element={<ProductSummary />} />
            <Route path='/cpp/sales' element={<ExecutiveSummary />} />
            <Route path='/cpp/saless' element={<SalesCustomer />} />
            <Route path='/cpp/patient' element={<PatientDashBoard />} />
            <Route path='/cpp/patientView' element={<PatientView/>} />
            <Route path='/cpp/patientDetails' element={<PatientDetails/>} />*/}
            <Route path = '/cpp/fileSystemDashboard' element={<FileSystemDashboard/>}/>
  <Route path = '/cpp/riskDashboard' element={<RiskDashboard/>}/>
            <Route path = '/cpp/serverDashboard' element={<ServerDashboard/>}/>
            <Route path = '/cpp/securityAnalysis' element={<SecurityAnalysis/>}/>
            <Route path = '/cpp/gen-AI' element={<GenAI/>}/> 
            <Route path = '/cpp/WebChat' element={<WebChat/>}/>
            <Route path = '/cpp/WebChatbot' element={<WebChatbot/>}/>
            <Route path = '/cpp/ChatBot' element={<ChatBox/>}/>
        </Routes>
    </ProductLayout>
  );
}

export default ProductNavigation;
