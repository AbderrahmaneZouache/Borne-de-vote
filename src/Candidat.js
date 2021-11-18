import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

let nextId = 0;

export default function List(props) {
  const [name, setName] = useState("");
  const [candidats, setCandidats] = useState([]);

  const miseAJourCandidats = props.miseAJourCandidats;

  const onVoteClick = props.changeEtat;

  return (
    <>
      <form>
        <input
          placeholder="Candidate's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {"  "}

        <Button
          variant="primary"
          onClick={() => {
            setName("");
            const nouveauCandidat = { id: nextId++, name: name, compteur: 0 };
            candidats.push(nouveauCandidat);
            setCandidats(candidats);
            miseAJourCandidats(candidats);
          }}
        >
          Add Candidat
        </Button>
      </form>

      <ListGroup>
        {candidats.map((c) => (
          <ListGroup.Item key={c.id}>{c.name} </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mb-2">
        <Button variant="success" size="lg" onClick={() => onVoteClick("vote")}>
          Start vote!
        </Button>
      </div>
    </>
  );
}
