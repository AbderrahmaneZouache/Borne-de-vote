import { Button, ListGroup } from "react-bootstrap";

export default function Vote(props) {
  const candidats = props.candidats;

  const onVoteClick = props.changeEtat;
  const miseAJourCandidats = props.miseAJourCandidats;
  return (
    <>
      <Button
        variant="danger"
        onClick={() => {
          miseAJourCandidats(candidats);
          onVoteClick("resultat");
        }}
      >
        End vote!
      </Button>
      <ListGroup>
        {candidats.map((c, index) => {
          return (
            <ListGroup.Item key={c.id}>
              {c.name}{" "}
              <Button
                onClick={() => {
                  candidats[index].compteur++;
                }}
              >
                Vote
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
