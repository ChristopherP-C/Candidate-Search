import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
import '../index.css';


const CandidateSearch = () => {
  console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      const userInfo = await data.map(async(candidate: { login: string }) => await searchGithubUser(candidate.login));
      console.log('User Info:', userInfo);
      const user = await Promise.all(userInfo);
      console.log('User:', user);
      setCandidates(user);
    };
    fetchCandidates();
  }, []);

  // create function to save candidate to local storage
  const saveCandidate = () => {
    if (candidates.length === 0) return;

    let parsedCandidates = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(candidates[0]);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    nextCandidate();
  };

  // create function to display next candidate card
  const nextCandidate = () => {
    if (candidates.length > 1) {
      setCandidates(candidates.slice(1));
    } else {
      setCandidates([]);
    }
  };

  //return the candidate search page
  return (
    <>
      <h1>Candidate Search</h1>
      {candidates.length > 0 ? (
        <CandidateCard candidate={candidates[0]} />
      ) : (
        <p>No more candidates to view, reload the page for more</p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={saveCandidate}>Save Candidate</button>
        <button onClick={nextCandidate}>Reject Candidate</button>
      </div>
    </>
  );


};

export default CandidateSearch;
