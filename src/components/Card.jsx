import { useState, useEffect } from "react";
import style from "../styles/Card.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";

export function Card(props) {
    console.log(props.myFavorites);
    const location = useLocation();
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = (event) => {
        event.preventDefault();
        if (isFav) {
            setIsFav(false);
            props.deleteFavorite(props.id);
        } else {
            setIsFav(true);
            props.addFavorite({
                key: props.id,
                id: props.id,
                name: props.name,
                species: props.species,
                gender: props.gender,
                image: props.image,
                onClose: props.onClose,
                isFav: isFav,
                handleFavorite: (event) => {
                    handleFavorite(event);
                },
            });
        }
    };

    useEffect(() => {
        props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [props.myFavorites, props.id]);

    return (
        <div className={style.Card}>
        <div className={style.fav}>

            {isFav ? (
                <button onClick={handleFavorite} className={style.emoji}>❤️</button>
            ) : (
                <button onClick={handleFavorite} className={style.emoji}>🤍</button>
            )}

            {location.pathname !== '/favorites' && <button
                className={style.button}
                onClick={() => {
                    props.onClose(props.id);
                }}
            >
                <span>X</span>
            </button>}
        </div>
            <NavLink to={`/detail/${props.id}`} className={style.link}>
                <h2>{props.name}</h2>
            </NavLink>
            <div className={style.h2Container}>
                <h2 className={style.h2}>{props.species}</h2>
                <h2 className={style.h2}>{props.gender}</h2>
            </div>
            <img src={props.image} alt="character" />
        </div>
    );
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        addFavorite: (character) => {
            dispatch(addFavorite(character));
        },
        deleteFavorite: (id) => {
            dispatch(deleteFavorite(id));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
