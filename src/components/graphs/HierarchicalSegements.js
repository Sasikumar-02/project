import React, { useState } from "react";

import TreeMap, { Size, Title,Tooltip, Colorizer } from "devextreme-react/tree-map";
import TreeMapBreadcrumbs from "./TreeMapBreadcrumbs";
import { useSelector } from "react-redux";
// let citiesPopulation =
//  [
// 	{
// 		name: "1: STUDENT",
// 		items: [
// 			{ name: "UNKNOWN", value: 63, label: "UNKNOWN \n 63" },
// 			{ name: "BASIC LIFER", value: 111, label: "BASIC LIFER \n 111" },
// 			{ name: "CAPTAIN", value: 60, label: "CAPTAIN \n 60" },
// 			{
// 				name: "DISKARTE PROVIDER",
// 				value: 91,
// 				label: "DISKARTE PROVIDER \n 91",
// 			},
// 			{ name: "GO-GETTER", value: 22, label: "GO-GETTER \n 22" },
// 			{ name: "PASSION-DRIVEN", value: 215, label: "PASSION-DRIVEN \n 215" },
// 			{ name: "THRIVING PINOY", value: 206, label: "THRIVING PINOY \n 206" },
// 		],
// 		value: 768,
// 		label: "1: STUDENT \n 768",
// 	},
// 	{
// 		name: "2: YUPPIE",
// 		items: [
// 			{ name: "UNKNOWN", value: 623, label: "UNKNOWN \n 623" },
// 			{ name: "BASIC LIFER", value: 31, label: "BASIC LIFER \n 31" },
// 			{ name: "CAPTAIN", value: 24, label: "CAPTAIN \n 24" },
// 			{
// 				name: "DISKARTE PROVIDER",
// 				value: 19,
// 				label: "DISKARTE PROVIDER \n 19",
// 			},
// 			{ name: "GO-GETTER", value: 30, label: "GO-GETTER \n 30" },
// 			{ name: "PASSION-DRIVEN", value: 161, label: "PASSION-DRIVEN \n 161" },
// 			{ name: "THRIVING PINOY", value: 115, label: "THRIVING PINOY \n 115" },
// 		],
// 		value: 1003,
// 		label: "2: YUPPIE \n 1003",
// 	},
// 	{
// 		name: "3: TRANSITIONER",
// 		items: [
// 			{ name: "UNKNOWN", value: 3538, label: "UNKNOWN \n 3538" },
// 			{ name: "BASIC LIFER", value: 85, label: "BASIC LIFER \n 85" },
// 			{ name: "CAPTAIN", value: 76, label: "CAPTAIN \n 76" },
// 			{
// 				name: "DISKARTE PROVIDER",
// 				value: 84,
// 				label: "DISKARTE PROVIDER \n 84",
// 			},
// 			{ name: "GO-GETTER", value: 52, label: "GO-GETTER \n 52" },
// 			{ name: "PASSION-DRIVEN", value: 279, label: "PASSION-DRIVEN \n 279" },
// 			{ name: "THRIVING PINOY", value: 226, label: "THRIVING PINOY \n 226" },
// 		],
// 		value: 4340,
// 		label: "3: TRANSITIONER \n 4340",
// 	},
// 	{
// 		name: "4: BALANCER",
// 		items: [
// 			{ name: "UNKNOWN", value: 10113, label: "UNKNOWN \n 10113" },
// 			{ name: "BASIC LIFER", value: 68, label: "BASIC LIFER \n 68" },
// 			{ name: "CAPTAIN", value: 36, label: "CAPTAIN \n 36" },
// 			{
// 				name: "DISKARTE PROVIDER",
// 				value: 25,
// 				label: "DISKARTE PROVIDER \n 25",
// 			},
// 			{ name: "GO-GETTER", value: 44, label: "GO-GETTER \n 44" },
// 			{ name: "PASSION-DRIVEN", value: 429, label: "PASSION-DRIVEN \n 429" },
// 			{ name: "THRIVING PINOY", value: 1535, label: "THRIVING PINOY \n 1535" },
// 		],
// 		value: 12250,
// 		label: "4: BALANCER \n 12250",
// 	},
// 	{
// 		name: "5: RETIREE",
// 		items: [
// 			{ name: "UNKNOWN", value: 9980, label: "UNKNOWN \n 9980" },
// 			{ name: "BASIC LIFER", value: 12, label: "BASIC LIFER \n 12" },
// 			{ name: "CAPTAIN", value: 26, label: "CAPTAIN \n 26" },
// 			{ name: "DISKARTE PROVIDER", value: 2, label: "DISKARTE PROVIDER \n 2" },
// 			{ name: "GO-GETTER", value: 2, label: "GO-GETTER \n 2" },
// 			{ name: "PASSION-DRIVEN", value: 11, label: "PASSION-DRIVEN \n 11" },
// 			{ name: "THRIVING PINOY", value: 7, label: "THRIVING PINOY \n 7" },
// 		],
// 		value: 10040,
// 		label: "5: RETIREE \n 10040",
// 	},
// 	{
// 		name: "UNKNOWN",
// 		items: [
// 			{ name: "UNKNOWN", value: 15860, label: "UNKNOWN \n 15860" },
// 			{ name: "BASIC LIFER", value: 42, label: "BASIC LIFER \n 42" },
// 			{ name: "CAPTAIN", value: 18, label: "CAPTAIN \n 18" },
// 			{
// 				name: "DISKARTE PROVIDER",
// 				value: 15,
// 				label: "DISKARTE PROVIDER \n 15",
// 			},
// 			{ name: "GO-GETTER", value: 6, label: "GO-GETTER \n 6" },
// 			{ name: "PASSION-DRIVEN", value: 27, label: "PASSION-DRIVEN \n 27" },
// 			{ name: "THRIVING PINOY", value: 66, label: "THRIVING PINOY \n 66" },
// 		],
// 		value: 16034,
// 		label: "UNKNOWN \n 16034",
// 	},
// ];

const formattedValue = new Intl.NumberFormat('en-US');
function customizeTooltip(arg) {	const { data } = arg.node;
	
	return {
		text: arg.node.isLeaf() ? `<span class="city">${data.label}</span>` : null,
	};
}

function HierarchicalSegements(attribute) {

	const hierarchicalData = useSelector(state=>state.chart.hierarchicalData)	
	let output = hierarchicalData.map((item) => {
		return {
			label:`${item.name} \n ${formattedValue.format(item.value)}`,value:item.value
		}
	})

   const rootValue = !attribute.attribute ? "Lifestage": attribute.attribute;
	const [drillInfo, setDrillInfo] = useState([]);
 
  	const [hoveredItem, setHoveredItem] = useState(null);

	const nodeClick = (e) => {		

		e.node.drillDown();
	};

	const drill = (e) => {
		const drillInfo = [];

		for (let node = e.node.getParent(); node; node = node.getParent()) {
			drillInfo.unshift({
				text:
					node.label() || !attribute.attribute
						? "Lifestage"
						: attribute.attribute,
				node,
			});
		}

		if (drillInfo.length) {
			drillInfo.push({
				text: e.node.label(),
			});
		}

		setDrillInfo(drillInfo);
	};

	const drillInfoClick = (node) => {
	
		if (node) {
			node.drillDown();
		}
	};
  

	return (
		<React.Fragment>
			<TreeMapBreadcrumbs
				className="drill-down-title"
				onItemClick={drillInfoClick}
        rootValue={rootValue}
				treeInfo={drillInfo}
			/>
			<TreeMap
				dataSource={output}
				interactWithGroup={true}
				maxDepth={1}
				onClick={nodeClick}
				onDrill={drill}
				labelField="label"        
				layoutAlgorithm={"strips"}>
				<Tooltip
					enabled={true}
					format="thousands"
					customizeTooltip={customizeTooltip}
				/>
				<Size height={440} />
        
        <Colorizer
      
          palette={[
            "#204496",
            "#4359AA",
            "#576CC4",
            "#6872FA",
            "#9FA1FF",
            "#7084EA",
          ]}
         
        />

				

				<Title text="" placeholderSize={80} />
			</TreeMap>
		</React.Fragment>
	);
}

export default HierarchicalSegements;
