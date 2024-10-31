import type Candidate from "../interfaces/Candidate.interface";

type CandidateCardProps = {
    candidate: Candidate;
    };

const CandidateCard = (props: CandidateCardProps) => {
    return (
        <>
        <section className="candidate-card">
                <h2>{props.candidate.login}</h2>
            <div className="candidate-avatar">
                {props.candidate.avatar_url?(<img src={props.candidate.avatar_url} alt={props.candidate.login}/>) : (<h2>No user avatar found</h2>)}
            </div>
            <div className="candate-info">
                {props.candidate.name? (<h2>{props.candidate.name}</h2>): null} 
                {props.candidate.location ? (<p>{props.candidate.location}</p>) : (<p>No location listed</p>)}
                <a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a>
                {props.candidate.company? (<p>{props.candidate.company}</p>) : (<p>No company listed</p>)}
                {props.candidate.bio? (<p>{props.candidate.bio}</p>) : (<p>no bio</p>)}
            </div>
        </section>
        </>
    )
}

export default CandidateCard;