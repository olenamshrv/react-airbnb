import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function AdditionalProperties({ additionalProperties }) {
  return (
    <Box className="additional-properties" shadow>
      <Heading border>Додаткові властивості</Heading>

      <div className="additional-properties">
        <List {...additionalProperties}></List>
      </div>
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  check_in_instructions,
}) {
  const set = host_languages.join(", ").toLowerCase();
  const convertedHostLanguages = set.charAt(0).toUpperCase() + set.slice(1);

  //   const convertedHostLanguages2 =
  //     host_languages[0].toString().charAt(0).toUpperCase() +
  //     host_languages.join(", ").toLowerCase().slice(1);

  return (
    <ul className="additional-properties-list">
      <ListItem title="Правила дому">{house_rules}</ListItem>

      <ListItem title="Політика скасування">{cancellation_policy}</ListItem>

      <ListItem title="Місцевий транспорт">{local_transportation}</ListItem>

      <ListItem title="Мови хоста">{convertedHostLanguages}</ListItem>

      <ListItem title="Спеціальні пропозиції:">{special_offers}</ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        {check_in_instructions}
      </ListItem>
    </ul>
  );
}
