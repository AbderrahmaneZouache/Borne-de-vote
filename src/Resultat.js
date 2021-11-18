import { ListGroup } from "react-bootstrap";

export default function Resultat(props) {
  const candidats = props.candidats;

  const getGagnan = (cs) => {
    let i = 0;
    let candidat = candidats[0];

    cs.map((element, indice) => {
      if (element.compteur > candidat.compteur) {
        i = indice;
        candidat = element;
      }
    });

    return candidat;
  };

  const gagant = getGagnan(candidats);

  return (
    <div>
      <p>
        Winner : <h1>{gagant.name}</h1>
      </p>
      <ListGroup>
        {candidats.map((c) => {
          return (
            <ListGroup.Item>
              {c.name} = {c.compteur}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
