import { Component } from "react";
import './card-container.component.styles.css';

class CardContainer extends Component {

    render() {
        const {name,email,id} = this.props;
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardContainer;