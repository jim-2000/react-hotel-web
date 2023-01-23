import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
 
const Pageloader = ({isloading=false}) => {
    const override = {
        display: "block",
        margin: "50% auto",
        borderColor: "red",

      };
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#36d7b7");
  return (
<div className="h-screen flex justify-center items-center">

      <HashLoader
        color={"#36d7b7"}
        loading={isloading}
        className='max-auto'
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"   
        speedMultiplier={1.5}     
      />
    </div>
  )
}

export default Pageloader