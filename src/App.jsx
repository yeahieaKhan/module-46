import "./App.css";
import CollectedForm from "./components/FormAction/CollectedForm/CollectedForm";
import FormAction from "./components/FormAction/FormAction";
import ProductMangement from "./components/ProductMangement/ProductMangement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlled from "./components/UnControlled/UnControlled";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <CollectedForm></CollectedForm> */}
      {/* <UnControlled></UnControlled> */}
      <ProductMangement></ProductMangement>
    </>
  );
}

export default App;
