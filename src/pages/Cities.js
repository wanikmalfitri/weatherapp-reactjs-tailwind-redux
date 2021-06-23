import React from "react";
import { Container, CityCardWithSaved } from "../components";
import { useSelector } from "react-redux";

const Cities = () => {
  const cities = useSelector((state) => state.cities.list);
  return (
    <Container>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4">
        {cities.map((city, index) => (
          <CityCardWithSaved
            key={index}
            name={city.city}
            lat={city.lat}
            lng={city.lng}
            isSaved={city.isSaved}
            isDefault={city.isDefault}
          />
        ))}
      </div>
    </Container>
  );
};

export default Cities;
