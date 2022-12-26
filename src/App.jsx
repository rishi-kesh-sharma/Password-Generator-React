import { useRef } from "react";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";

function App() {
  const [specifications, setspecifications] = useState({
    length: 5,
    adduppercase: false,
    addlowercase: false,
    addnumbers: false,
    addsymbols: false,
  });
  const [password, setPassword] = useState("");
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let generatedPassword = "";
    for (let i = 0; i < parseInt(specifications.length); i++) {
      generatedPassword += Math.trunc(Math.random() * 10);
    }

    console.log(generatedPassword);

    ref.current.textContent = generatedPassword;
    setPassword(generatedPassword);
  };

  const copyPassword = (e) => {
    navigator.clipboard.writeText(password);
  };

  const handleChange = (e) => {
    if (e.currentTarget.type == "checkbox") {
      console.log(e.currentTarget.checked);

      const newSpecifications = { ...specifications };
      newSpecifications[`add${e.currentTarget.id}`] = e.currentTarget.checked;

      setspecifications(newSpecifications);
    }
    if (e.currentTarget.type == "number") {
      setspecifications({
        ...specifications,
        length: Number(e.currentTarget.value),
      });
    }
  };
  console.log(specifications);
  return (
    <div className="App">
      <div className="title">Password Generator</div>
      <div className="password-display">
        <p className="password" ref={ref}></p>
        <div className="copy-icons">
          <FiCopy onClick={copyPassword} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="specifications">
        <div className="length">
          <label htmlFor="length">Password Length</label>
          <input
            onChange={handleChange}
            type="number"
            name="length"
            id="length"
            max="40"
          />
        </div>
        <div className="uppercase">
          <label htmlFor="uppercase">Add Uppercase Letters</label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="uppercase"
            id="uppercase"
          />
        </div>
        <div className="lowercase">
          <label htmlFor="lowercase">Add lowercase Letters</label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="lowercase"
            id="lowercase"
          />
        </div>
        <div className="number">
          <label htmlFor="number">Add numbers </label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="number"
            id="numbers"
          />
        </div>
        <div className="symbol">
          <label htmlFor="symbol">Add symbols </label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="symbol"
            id="symbols"
          />
        </div>
        <button type="submit" className="generate-btn">
          Generate Password
        </button>
      </form>
    </div>
  );
}

export default App;
