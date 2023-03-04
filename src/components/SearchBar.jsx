import style from "../styles/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
    const [character, setCharacter] = useState("");
    const [input, setInput] = useState(character.name);

    return (
        <div className={style.searchBar}>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(setCharacter(event.target.value))}
            />
            <button
                onClick={() => {
                    props.onSearch(character);
                    setInput('')
                }}
            >
                Agregar
            </button>
        </div>
    );
}
