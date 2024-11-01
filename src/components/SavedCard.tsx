import Candidate from "../interfaces/Candidate.interface";

type SavedCardProps = {
    candidate: Candidate;
    removeCandidate: (e: React.MouseEvent<HTMLButtonElement>, login: string) => void;
    };

const SavedCard = (props: SavedCardProps) => {

    return (
           <>
           <section className="candidate-card">
                   <h2>{props.candidate.login}</h2>
               <div className="candidate-avatar">
                   {props.candidate.avatar_url?(<img src={props.candidate.avatar_url} alt={props.candidate.login}/>) : (<h2>N/A</h2>)}
               </div>
               <div className="candate-info">
                   {props.candidate.name? (<h2>{props.candidate.name}</h2>): null} 
                   {props.candidate.location ? (<p>{props.candidate.location}</p>) : (<p>N/A</p>)}
                   <a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a>
                   {props.candidate.company? (<p>{props.candidate.company}</p>) : (<p>N/A</p>)}
                   {props.candidate.bio? (<p>{props.candidate.bio}</p>) : (<p>N/A</p>)}
               </div>
           </section>
           <section className="buttons">
               <button onClick={(e) => props.removeCandidate(e, props.candidate.login)}>Remove</button>
              </section>
           </>
       )
    
}

export default SavedCard;