import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const location = useLocation();
  const kualaLumpurCoord = {
    latitude: 3.140853,
    longitude: 101.693207,
  };
  const [coordinate, setCoordinate] = useState(null);

  const savePosition = async () => {
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

  useEffect(() => {
    const coord = JSON.parse(localStorage.getItem("coordinate"));
    if (coord) {
      setCoordinate({
        latitude: coord.latitude,
        longitude: coord.longitude,
      });
    } else {
      setCoordinate(kualaLumpurCoord);
    }
  }, []);

  return (
    <div className="bg-gray-800 text-gray-50 shadow">
      <Container>
        <div className="relative z-10 flex-shrink-0 flex h-16">
          <div className="flex-1 flex justify-between">
            <div className="flex-1 flex items-center">
              <Link to="/" className="text-lg font-semibold">
                🇲🇾 Malaysia Weather
              </Link>
            </div>
            {location.pathname.split("/")[1] === "city" &&
            location.pathname.split("/").length === 2 ? (
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div></div>
                </div>
              </div>
            ) : location.pathname.split("/").length === 3 ? (
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <Link
                      to="/city"
                      className="
                    rounded-full
                    py-1.5
                    px-3

                    text-gray-50 
                    hover:text-indigo-600 text-sm
                    focus:outline-none
                  "
                    >
                      <span>All cities</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <Link
                      to="/city"
                      className="
                    rounded-full
                    py-1.5
                    px-3
a
                    text-gray-50 
                    hover:text-indigo-600 text-sm
                    focus:outline-none
                    mr-2
                  "
                    >
                      <span>All cities</span>
                    </Link>

                    {coordinate === kualaLumpurCoord ? (
                      <button
                        type="button"
                        onClick={() => savePosition()}
                        className="
                        bg-indigo-600
                        hover:bg-indigo-700
                        py-1.5
                        px-3
                        rounded-full
                        text-sm
                        focus:outline-none
                      "
                      >
                        Get current location
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="
                        bg-white
                        hover:bg-gray-100
                        py-1.5
                        px-3
                        rounded-full
                        text-sm
                        text-gray-800
                        focus:outline-none
                      "
                      >
                        Current location
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
