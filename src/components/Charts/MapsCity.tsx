import VectorMap, {
  Layer,
  Tooltip,
  Label,
} from "devextreme-react/vector-map";
//import * as mapsData from "devextreme/dist/js/vectormap-data/usa.js"; 
//import { markers } from "../../Data/data";

const sizeGroups = [0, 8000, 10000, 50000];

const bounds = [-125, 49, -66, 25]; 

export default function App() {
  return (
    <VectorMap id="vector-map" bounds={bounds} width={400} height={300}>
      {/* <Layer dataSource={mapsData.usa} hoverEnabled={false} color="#2B5BCA"></Layer>  */}
      <Layer
        //dataSource={markers}
        name="bubbles"
        elementType="bubble"
        dataField="value"
        color="#EA4648"
        minSize={30}
        maxSize={60}
        sizeGroups={sizeGroups}
       // opacity="0.7"
      
      >
        <Label enabled={false}></Label>
      </Layer>
      {/* <Tooltip enabled={true} customizeTooltip={customizeTooltip} ></Tooltip> */}
    </VectorMap>
  );
}

function customizeTooltip(arg:any) {
  if (arg.layer.type === "marker") {
    return { text: arg.attribute("tooltip") };
  }
  return null;
}
