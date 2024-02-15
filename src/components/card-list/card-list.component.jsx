import './card-list.styles.css';
import CardContainer from "../card-container/card-container.component";

// const CardList = (props, forwardRef) => {
//     const { monsters } = props;
//     return (
//         <>
//             <div className="card-list">
//                 {monsters.map(monster => {
//                     return (
//                         <CardContainer monster={monster} key={monster.id} />
//                     )
//                 }
//                 )}
//             </div>
//         </>
//     )
// }
const CardList = ({ monsters }) => {
    console.log(monsters);
    return (
        <>
            <div className="card-list">
                {monsters.map(monster => {
                    return (
                        <CardContainer monster={monster} key={monster.id} />
                    )
                }
                )}
            </div>
        </>
    )

}

export default CardList;