import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import poolImg from "./pool.svg";
import gymImg from "./gym.svg";
import breakfastImg from "./breakfast.svg";
import wifiImg from "./wifi.svg";
import parkingImg from "./parking.svg";
import petsImg from "./pets.svg";
import transferImg from "./transfer.svg";
import conciergeImg from "./concierge-service.svg";
import roomImg from "./room-service.svg";
import childImg from "./child.svg";

export default function Amenities({ amenities }) {
  return (
    <Box className="amenities" shadow>
      <Heading border>Зручності</Heading>
      <List {...amenities} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={poolImg}>
          <span>Басейн</span>
        </ListItem>
      )}

      {hasGym && (
        <ListItem imageSrc={gymImg}>
          <span>Спортивний зал</span>
        </ListItem>
      )}

      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfastImg}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}

      {hasFreeWiFi && (
        <ListItem imageSrc={wifiImg}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}

      {hasParking && (
        <ListItem imageSrc={parkingImg}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}

      {hasPetsAllowed && (
        <ListItem imageSrc={petsImg}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}

      {hasAirportShuttle && (
        <ListItem imageSrc={transferImg}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}

      {hasConciergeService && (
        <ListItem imageSrc={conciergeImg}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}

      {hasRoomService && (
        <ListItem imageSrc={roomImg}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}

      {hasChildFriendly && (
        <ListItem imageSrc={childImg}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
