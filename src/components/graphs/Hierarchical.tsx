// import React, { useState, useEffect,useRef } from "react";
// import { CloseOutlined } from "@ant-design/icons";
// import { Select, Button } from "antd";
// import HierarchicalSegements from "./HierarchicalSegements";

// import ApiService from "../api/apiService";
// import { setLoggedIn, setLoading, setHierarchicalData,setHierarchicalValue1,setHierarchicalValue2} from "../../redux/Actions";
// // import { useDispatch, useSelector } from "react-redux";

// const { Option } = Select;

// const Hierarchical = ({ isHidden, onHideComponent }: { isHidden: boolean; onHideComponent: () => void }) => {
// 	const apiservice = new ApiService();
// 	const formatter = new Intl.NumberFormat('en-US');
// 	// const dispatch = useDispatch();
// 	const currentDate = new Date();
// 	currentDate.setDate(currentDate.getDate() - 2);
// 	const year = currentDate.getFullYear();
// 	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
// 	const day = String(currentDate.getDate()).padStart(2, "0");
// 	const profileDate = `${year}-07-18`;		
// 	const value1 = useSelector((state:any)=>state.hierarchicalValues.hierarchicalValue1)
// 	const value2 = useSelector((state:any)=>state.hierarchicalValues.hierarchicalValue2)
// 	// const [value1, setValue1] = useState("LIFESTAGE");
// 	// const [value2, setValue2] = useState("PSYCHOGRAPHIC_SEGMENT");
// 	const [apiResult, setApiResult] = useState(null);
// 	const [attribute, setAttribute] = useState("");
// 	const selectFilters = useSelector(
// 		(state:any) => state.selectFilters.selectFilters
// 	);
// 	let condition = selectFilters
//     ? `profile_date = '${profileDate}' and ${selectFilters.substring(
//         selectFilters.indexOf(":") + 1
//       ).trim()}`
//     : `profile_date = '${profileDate}'`;
// 	let  options = useSelector((state:any) => state.insightsAttr.subInsightsAttr);

	
// 	const [data, setData] = useState({
// 		data: [value1, value2], 
// 		condition: condition
// 	});

// 	const handleSubmit = () => {	
// 		const newData = {
// 			data: [value1, value2],
// 			condition: condition,
// 		}	
// 		setData(newData);
// 	};

// 	const prevRef = useRef(data);
//   const isFirstUpdate = useRef(true);

//   useEffect(() => {
//     if (!isFirstUpdate.current && prevRef.current !== data) {
//        handleGetHierarchicalSegment(data);
//     }
//     prevRef.current = data;
//     isFirstUpdate.current = false;
//   }, [data]);
//   useEffect(() => {	
//      handleGetHierarchicalSegment(data);
	
//   }, [isHidden]);
//   const handleGetHierarchicalSegment = async (data:any) => {
// 	try {
// 	  dispatch(setLoading(true));
  
// 	  const res = await apiservice.getHierarchicalSegment(data);
  
// 	  if (res && res.data) {
// 		dispatch(setHierarchicalData(res.data));
// 		dispatch(setLoading(false));
// 	  }   
	  
// 	} catch (error) {	  
// 	  if (error) { //error?.response?.status === 401
// 		localStorage.removeItem("loggedIn");
// 		dispatch(setLoggedIn(false));
// 		dispatch(setLoading(false));
// 	  }
// 	} finally {
// 	  dispatch(setLoading(false));
// 	}
//   };
  

// 	const handleDropdown1Change = (value:any) => {
// 		// setValue1(value);
// 		dispatch(setHierarchicalValue1(value))
// 		setAttribute(value);
		
// 	};

// 	const handleDropdown2Change = (value:any) => {
// 		// setValue2(value);
// 		dispatch(setHierarchicalValue2(value))
		
// 	};
// 	const filterOption = (input:any, option:any) => {
// 		return (
// 			option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
// 		);
// 	};

// 	return (
// 		<div>
// 			{!isHidden && (
// 				<div className="container">
// 					<div className="row mt-4 align-items-center">
// 						<div className="col-lg-12 pt-2 mt-4">
// 							<div className="hierarchical-wrap">
// 								<div className="row mt-4">
// 									<div className="col-lg-6">
// 										<h2 className="text-default-prime">
// 											Hierarchical Segments
// 										</h2>
// 									</div>
// 									<div className="col-lg-6 d-flex justify-content-end">
// 										<Button className="segment-btn" onClick={handleSubmit}>
// 											Submit
// 										</Button>
// 										<Button
// 											className="segment-close"
// 											icon={<CloseOutlined />}
// 											onClick={onHideComponent} // Call the function from the parent component
// 										/>
// 									</div>
// 								</div>
// 								<div className="row my-4 hier-wrap">
// 									<div className="col-lg-6">
// 										<Select
// 											id="dropdown1"
// 											value={value1}
// 											onChange={handleDropdown1Change}
// 											className="select"
// 											filterOption={filterOption}
// 											showSearch
// 											dropdownClassName="custom-dropdown">
// 											{options?.map((option:any) => (
// 												<Option key={option.name} value={option.name}>
													
// 													{option.name.replace(/_/g, ' ').toLowerCase()}
// 												</Option>
// 											))}
// 										</Select>
// 									</div>
// 									<div className="col-lg-6">
// 										<Select
// 											id="dropdown1"
// 											value={value2}
// 											onChange={handleDropdown2Change}
// 											className="select"
// 											showSearch
// 											filterOption={filterOption}
// 											dropdownClassName="custom-dropdown">
// 											{options?.map((option:any) => (
// 												<Option key={option.name} value={option.name}>
// 													{option.name.replace(/_/g, ' ').toLowerCase()}
// 												</Option>
// 											))}
// 										</Select>
// 									</div>
// 								</div>

// 								{/* This is where we'll display treemap */}
// 								<div>
// 									<HierarchicalSegements attribute={attribute} />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Hierarchical;


import React from 'react'

const Hierarchical = () => {
  return (
	<div>Hierarchical</div>
  )
}

export default Hierarchical