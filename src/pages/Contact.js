import React, { useState, useEffect } from "react";

export const Contact = props => {
  const [people, setPeople] = useState({
    people: ["Justin", "Rob", "Tom Brady"]
  });

  return people.people.map(person => <p>{person}</p>);
};
