import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* All pages load here */}
      <div style={{ flex: 1 }}>
        <AppRouter/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
