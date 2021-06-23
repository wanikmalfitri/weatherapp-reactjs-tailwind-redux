import { useEffect } from "react";
import React from "react";
import Routers from "./router";

function App() {
  useEffect(() => {
    const position = async () => {
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          localStorage.setItem(
            "coordinate",
            JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          );
        },
        (err) => console.log(err)
      );
    };
    position();
  }, []);

  return (
    <React.Fragment>
      <Routers />
    </React.Fragment>
  );
}

export default App;
