import type React from "react";
import { useEffect, useState } from "react";
import SavedCard from "../components/SavedCard";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const removeCandidate = (e: React.MouseEvent<HTMLButtonElement>, login: string) => {
    e.preventDefault();
    let parsedCandidates:Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    const updatedCandidates = parsedCandidates.filter(candidate => candidate.login !== login);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    setSavedCandidates(updatedCandidates);
  }

  useEffect (() => {
    const parsedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(parsedCandidates);
  }, []);



  return (
    <>
      <h1>Potential Candidates</h1>
      <section className="saved-candidates">
        {savedCandidates.map(candidate => (
          <SavedCard key={candidate.login} candidate={candidate} removeCandidate={removeCandidate} />
        ))}
      </section>
    </>
  );
};

export default SavedCandidates;
