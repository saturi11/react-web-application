import Header from "./componets/Header";
import ProductView from "./componets/ProductView";
import Description from "./componets/Description";
import { Row } from "./styles";

function App() {
  return (
    <>
      <Header />
      <Row>
        <Description />
        <ProductView />
      </Row>
    </>
  );
}

export default App;
