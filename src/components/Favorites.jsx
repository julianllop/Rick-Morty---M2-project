import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import style from "../styles/Favorites.module.css";
import rick from '../img/pngimg.com - rick_morty_PNG25.png'

const Favorites = (props) => {
    return (
        <div>
            {props.myFavorites.length === 0 ? (
                <div className={style.cont}>
                    <div className={style.Container}>
                        <img src={rick} alt="R&M" className={style.img} />
                    </div>
                    <h1>
                        Are you serious? You don't have any favorite character?
                    </h1>
                    <h1>
                        Come on dude... Go back to Home and make some favs...
                    </h1>
                </div>
            ) : (
                <div className={style.fav}>
                    {props.myFavorites.map((character) => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            image={character.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);
