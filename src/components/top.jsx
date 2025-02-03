import "../App.css";

export default function Top() {
  return (
    <div className="top">
      <div className="head">
        <div className="logo">
          <p>
            My<strong> Logo</strong>{" "}
          </p>
        </div>

        <div className="nav">
          <div className="hb">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <button>Home</button>
          <button>Product</button>
          <button>About</button>
          <button>Help</button>
        </div>
      </div>
      <div className="foot">
        <div className="bullets">
          <li id="a"></li>
          <li></li>
          <li id="c"></li>
        </div>
        <div className="main">Design.</div>
        <div className="year">
          2 <br /> 0 <br /> 2 <br /> 5
        </div>
      </div>
    </div>
  );
}
