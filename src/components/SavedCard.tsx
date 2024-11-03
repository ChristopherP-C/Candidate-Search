import Candidate from "../interfaces/Candidate.interface";
import '../index.css';

type SavedCardProps = {
    candidate: Candidate;
    removeCandidate: (e: React.MouseEvent<HTMLButtonElement>, login: string) => void;
    };

const SavedCard = (props: SavedCardProps) => {

    return (
           <tr className="candidate-card">
               <td className="candidate-avatar" style={{ width: '100px', height: '100px', textAlign: 'center' }}>
                   {props.candidate.avatar_url?(<img src={props.candidate.avatar_url} alt={props.candidate.login} style={{ width: '100%', height: 'auto', maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}/>) : (<h2>N/A</h2>)}
               </td>
                   <td>{props.candidate.login} {props.candidate.name? (<h2>{props.candidate.name}</h2>): null}</td>
                   <td>{props.candidate.location ? (<p>{props.candidate.location}</p>) : (<p>N/A</p>)}</td>
                   <td>{props.candidate.email? (<a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a>) : (<p>N/A</p>)}</td>
                   <td> {props.candidate.company? (<p>{props.candidate.company}</p>) : (<p>N/A</p>)}</td>
                   <td> {props.candidate.bio? (<p>{props.candidate.bio}</p>) : (<p>N/A</p>)}</td>
                   <td>
               <button onClick={(e) => props.removeCandidate(e, props.candidate.login)} 
                          style={{
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}>Remove</button></td>
           </tr>
       )
    
}

export default SavedCard;