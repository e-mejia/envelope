import AddressLabel from "./AddressLabel";
import "../stylesheets/Envelope.css";

//Envelope component
export default function Envelope(fromPerson, toPerson) {
  return (
    <div className="addr">
      <div className="addrlabel-container">
        <AddressLabel person={fromPerson} />
        <AddressLabel person={toPerson} />
      </div>
    </div>
  );
}
