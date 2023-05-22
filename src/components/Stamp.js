import usstamp from "../images/2c-us-stamp.jpg";

// Stamp image to be used
export default function Stamp() {
  const stampStyles = {
    width: "250px",
    height: "125px",
    marginTop: "25px",
  };
  return <img src={usstamp} alt="us-stamp" style={stampStyles} />;
}
