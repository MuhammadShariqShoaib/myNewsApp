import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News";
import Top from "./components/Top";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = "8b66f36805964120989bc09a8d686075";
  const pageSize = 18;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Top />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={4}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                category="general"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                pageSize={pageSize}
                category="Entertainment"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Business"
                pageSize={pageSize}
                category="Business"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Health"
                pageSize={pageSize}
                category="Health"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Science"
                pageSize={pageSize}
                category="Science"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sports"
                pageSize={pageSize}
                category="Sports"
                country="in"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
