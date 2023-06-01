// import Form from "react-bootstrap/Form";
import "./App.css";
function Quiz() {
  return (
    <div>
      <form className="quizform">
        <h1>ABC</h1>
        <div>
          <input type="radio" name="abc" value="xyz"></input>
          <label>xyz</label>
        </div>
        <div>
          <input type="radio" name="abc" value="sdf"></input>
          <label>sdf</label>
        </div>
        <div>
          <input type="radio" name="abc" value="op"></input>
          <label>op</label>
        </div>
        <div>
          <input type="radio" name="abc" value="qwe"></input>
          <label>qwe</label>
        </div>
      </form>
    </div>
  );
}

export default Quiz;
