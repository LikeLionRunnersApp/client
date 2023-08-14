import Main from "@pages/Main";
import Detail from "@pages/Detail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
