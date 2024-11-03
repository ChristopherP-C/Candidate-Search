import type Candidate from "../interfaces/Candidate.interface";
import '../index.css';

type CandidateCardProps = {
    candidate: Candidate;
    };

const CandidateCard = (props: CandidateCardProps) => {
    return (
        <>
        <section className="candidate-card" style={{ textAlign: 'center', background: 'black', border: '20px solid black', borderRadius: '15px', padding: '20px', margin: '20px',}}>
                <h2>{props.candidate.login}</h2>
            <div className="candidate-avatar">
                {props.candidate.avatar_url?(<img src={props.candidate.avatar_url} alt={props.candidate.login} style={{ width: '300px', height: '300px', borderRadius: '20%', objectFit: 'cover'}}/>) : (<h2>No user avatar found</h2>)}
            </div>
            <div className="candate-info">
                {props.candidate.name? (<h2>{props.candidate.name}</h2>): null} 
                {props.candidate.location ? (<p>{props.candidate.location}</p>) : (<p>No location listed</p>)}
                {props.candidate.email ? <a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a> : <p>no email included</p>}
                {props.candidate.company? (<p>{props.candidate.company}</p>) : (<p>No company listed</p>)}
                {props.candidate.bio? (<p>{props.candidate.bio}</p>) : (<p>no bio</p>)}
            </div>
        </section>
        </>
    )
}

export default CandidateCard;