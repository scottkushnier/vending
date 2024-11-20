import { Link } from "react-router-dom";

function Candy() {
  return (
    <>
      <p>CANDY!</p>
      <button>
        <Link to="/">Back</Link>
      </button>
    </>
  );
}

export default Candy;
