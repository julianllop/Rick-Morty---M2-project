import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/Detail.module.css";

const Detail = () => {
    const { detailId } = useParams();
    console.log(detailId);

    const [character, setCharacter] = useState();
    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/home");
    };

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                console.log(detailId);

                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);
    return (
        <div className={style.cont}>
            <div className={style.container}>
                <div className={style.detail}>
                    <div className={style.info}>
                        <h1>Name: {character?.name}</h1>
                        <h1>Status: {character?.status}</h1>
                        <h1>Specie: {character?.specie}</h1>
                        <h1>Gender: {character?.gender}</h1>
                        <h1>Origin: {character?.origin?.name}</h1>
                    </div>
                    <div className={style.img}>
                        <img src={character?.image} alt={character?.name} />
                    </div>
                </div>
            </div>
            <button onClick={backToHome}>Home</button>
        </div>
    );
};

export default Detail;
