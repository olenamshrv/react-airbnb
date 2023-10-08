import "./index.css";

import Heading from "../heading";
import Box from "../box";

import { Fragment } from "react";

export default function GuestsReview({ list }) {
  return (
    <div className="review-block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review-list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review-list__item">
      <div className="review-list__header">
        <span className="review-list__header__title">{guestName}</span>

        <div className="review-list__header__end">
          <span>Рейтинг: </span>
          <span>{rating}</span>
        </div>
      </div>

      <p className="review-list__text">{review}</p>
    </Box>
  );
}
