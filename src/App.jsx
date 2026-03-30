import Form from "./components/Form";
import Preview from "./components/Preview";
import Section from "./components/Section.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>ODIN RESUME</h1>
      <Section className="form container" title="Form" content={<Form />} />
      <Section
        className="preview container"
        title="Preview"
        content={<Preview />}
      />
    </>
  );
}

export default App;
