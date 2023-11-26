import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dev from "./pages/Dev/Dev";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Student from "./pages/Student/Student";
import Navbar from "./components/Navbar";
import Career from "./pages/Career/Career";
import Startup from "./pages/Startup/Startup";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaderLoading, setIsLoaderLoading] = useState(true);
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);

  useEffect(() => {
    console.log("loaderDone: " + isLoaderDone);
  }, [isLoaderDone]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaderLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    console.log(isLoaded);
    if (isLoaded && !isLoaderLoading) {
      setIsLoaderDone(true);
    }
  }, [isLoaded, isLoaderLoading]);

  const [shouldRunAnimation, setShouldRunAnimation] = useState(true);

  return (
    <>
      {isLoaderLoading || !isLoaded ? <Loader isLoaded={isLoaded} /> : null}
      {isLoaderDone && <Navbar isLoaderDone={isLoaderDone} />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoaderDone={isLoaderDone}
              handleImageLoad={handleImageLoad}
              shouldRunAnimation={shouldRunAnimation}
              setShouldRunAnimation={setShouldRunAnimation}
            />
          }
        />
        <Route
          path="/student"
          element={
            <Student
              isLoaderDone={isLoaderDone}
              handleImageLoad={handleImageLoad}
            />
          }
        />
        <Route
          path="/career"
          element={
            <Career
              isLoaderDone={isLoaderDone}
              handleImageLoad={handleImageLoad}
            />
          }
        />
        <Route
          path="/startup"
          element={
            <Startup
              isLoaderDone={isLoaderDone}
              handleImageLoad={handleImageLoad}
            />
          }
        />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </>
  );
};

export default App;
