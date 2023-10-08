import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import guestsImg from "./guests.svg";
import bedroomsImg from "./bedrooms.svg";
import bedsImg from "./beds.svg";
import bathsImg from "./baths.svg";

export default function PropertyDetails({ details }) {
  return (
    <Box className="property-details" shadow>
      <Heading border>Деталі властивості:</Heading>
      <List {...details} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guestsImg}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={bedroomsImg}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={bedsImg}>
        <span>{beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathsImg}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
