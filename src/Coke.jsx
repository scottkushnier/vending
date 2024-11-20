import { Link } from "react-router-dom";

function Coke() {
  return (
    <>
      <p>COKE!</p>
      <button>
        <Link to="/">Back</Link>
      </button>
    </>
  );
}

export default Coke;
