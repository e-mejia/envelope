import "../stylesheets/AddressLabel.css";

export default function AddressLabel({ person }) {
  const { name, address, city } = person;
  return (
    <div className="adr-label">
      <p>{name}</p>
      <p>{address}</p>
      <p>{city} </p>
    </div>
  );
}
