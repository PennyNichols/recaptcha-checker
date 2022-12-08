import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [modal, setModal] = useState(false);
  const [selection, setSelection] = useState();
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");

  const ONE =
    "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const TWO =
    "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const THREE =
    "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const FOUR =
    "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const FIVE =
    "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const SIX =
    "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const options = [ONE, TWO, THREE, FOUR, FIVE, SIX];

  useEffect(() => {
    setSelection(Math.ceil(Math.random() * 6));
  }, [modal]);

  const screening = (index) => {
    if (index + 1 !== selection) {
      setWarning("Sorry, try again.");
    } else {
      setModal(false);
      setWarning("");
      setSuccess("You're Human!");
    }
  };

  return (
    <div className="App">
      {!modal ? (
        <>
          <button onClick={() => setModal(true)}>
            {" "}
            Proove you are not a robot{" "}
          </button>
          {success && <h1 style={{ backgroundColor: "green" }}>{success}</h1>}
        </>
      ) : (
        <>
          <h3>Please select the number {selection}</h3>
          <div>
            {options.map((option, index) => (
              <img
                style={{ width: "4rem", height: "4rem" }}
                key={index}
                src={option}
                alt=""
                onClick={() => screening(index)}
              />
            ))}
          </div>
          {warning && <h1 style={{ backgroundColor: "red" }}>{warning}</h1>}
        </>
      )}
    </div>
  );
}
