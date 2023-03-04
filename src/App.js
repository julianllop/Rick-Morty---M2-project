import React, { useState, useEffect } from "react";
import style from "../src/styles/App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/forms/Form";
import Favorites from "./components/Favorites";

function App() {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const [access, setAccess] = useState(false);
    const username = "juliianllop@gmail.com";
    const password = "1234aoeu";

    useEffect(() => {
        !access && navigate("/");
    }, [access, navigate]);

    const login = (userData) => {
        if (userData.username === username && userData.password === password) {
            setAccess(true);
            navigate("/home");
        }
    };

    const logout = () => {
        setAccess(false);
    };

    const onSearch = (character) => {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    };

    const onClose = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    };

    return (
        <div className={style.App}>
            {location.pathname !== "/" && (
                <Nav onSearch={onSearch} logout={logout} />
            )}

            <Routes>
                <Route exact path="/" element={<Form login={login} />}></Route>
                <Route
                    exact
                    path="/home"
                    element={
                        <Cards characters={characters} onClose={onClose} />
                    }
                ></Route>
                <Route exact path="/favorites" element={<Favorites characters={characters}/>}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route path="/detail/:detailId" element={<Detail />}></Route>
            </Routes>
            <div></div>
        </div>
    );
}

export default App;
