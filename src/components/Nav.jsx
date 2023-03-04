import React from "react";
import SearchBar from "./SearchBar";
import style from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className={style.nav}>
            <button onClick={props.logout} className={style.logout}>
                logout
            </button>
            <div className={style.navLinks}>
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? style.active : style.disable
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive ? style.active : style.disable
                    }
                >
                    Favorites
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? style.active : style.disable
                    }
                >
                    About
                </NavLink>
            </div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
};

export default Nav;
