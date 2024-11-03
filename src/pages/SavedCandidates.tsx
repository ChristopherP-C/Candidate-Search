import type React from "react";
import { useEffect, useState } from "react";
import SavedCard from "../components/SavedCard";
import Candidate from "../interfaces/Candidate.interface";
import '../index.css';

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
      {savedCandidates.length === 0 ? <h2>No saved candidates</h2> : (
      <table className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {savedCandidates.map(candidate => (
          <SavedCard key={candidate.login} candidate={candidate} removeCandidate={removeCandidate} />
        ))}
      </tbody>
      </table>)}
    </>
  );
};

export default SavedCandidates;
