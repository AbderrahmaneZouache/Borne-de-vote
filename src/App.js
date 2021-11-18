import "./App.css";
import List from "./Candidat";
import Vote from "./Vote";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Resultat from "./Resultat";

function App() {
  const [candidats, setCandidats] = useState([]);
  const [etat, setEtat] = useState("list");

  const mettreAJourCandidats = (c) => {
    setCandidats(c);
  };

  const affiche = (e) => {
    if (e === "list") {
      return (
        <List miseAJourCandidats={mettreAJourCandidats} changeEtat={setEtat} />
      );
    } else if (e === "vote") {
      return (
        <Vote
          miseAJourCandidats={mettreAJourCandidats}
          candidats={candidats}
          changeEtat={setEtat}
        />
      );
    } else if (e === "resultat") {
      return <Resultat candidats={candidats} />;
    }
  };

  // Affichage des différents composants :
  return (
    <div className="App">
      <header className="App-header">{affiche(etat)}</header>
    </div>
  );
}

export default App;
