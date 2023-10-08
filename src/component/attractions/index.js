import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import { Fragment } from "react";

export default function NearbyAttractions({ list }) {
  return (
    <Box shadow className="attractions-list">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attractions-list__item">
        {list.map(({ id, name, link }) => (
          <Fragment key={id}>
            <ListItem>
              <a className="attractions-list__link" href={link}>
                {name}
              </a>
            </ListItem>
          </Fragment>
        ))}
      </div>
    </Box>
  );
}
