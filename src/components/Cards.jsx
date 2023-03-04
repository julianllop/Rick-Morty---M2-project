import style from "../styles/Cards.module.css";
import Card from "./Card";
import rick_morty from "../img/78841ebe0e2d748ed2f3e6d88ea5bf6f.png";

export default function Cards(props) {
    const { characters } = props;
    return (
        <div>
            {characters.length === 0 ? (
                <div className={style.cont}>
                    <div className={style.Container}>
                        <img src={rick_morty} alt="R&M" className={style.img} />
                    </div>
                        <h1>
                            Morty... Look Morty... We're traped in a {'<div/>'} tag
                        </h1>
                        <h1>
                            Do something... search some characters so we can get
                            out of here...
                        </h1>
                </div>
            ) : (
                <div className={style.Cards}>
                    {characters.map((character) => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            image={character.image}
                            onClose={props.onClose}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
