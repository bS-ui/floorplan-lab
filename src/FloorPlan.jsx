import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return ( 
    <>
    <Bedroom bedNum={1}/>
    <Kitchen/>
    <Bath size="Half"/>
    <Bedroom bedNum={2}/>
    <LivingRoom/>
    <Bath size="Full"/>
    <Bedroom bedNum={3}/>
    </>
  );
}

export default FloorPlan;