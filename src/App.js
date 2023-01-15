import { ThemeProvider } from "@mui/material";
import { IntlProvider } from "react-intl";
import theme from "./theme";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <IntlProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
