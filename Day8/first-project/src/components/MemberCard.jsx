import "./MemberCard.css";

function MemberCard({ name, role, experience }) {
  return (
    <>
      <div className="card">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <h3>{experience}</h3>
      </div>
    </>
  );
}

export default MemberCard;
