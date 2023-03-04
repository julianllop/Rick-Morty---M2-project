import React, { useState, useEffect } from "react";
import style from "../../styles/Form.module.css";
import { validate } from "./validations";

const Form = (props) => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });

        setErrors(
            validate({
                ...userData,
                [property]: value,
            })
        );
    };

    const handleSubmit = () => {
        props.login(userData);
    };

    // useEffect(() => {

    // }, []);

    return (
        <div>
            <form className={style.Form} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Insert your username"
                            value={userData.username}
                            onChange={handleInputChange}
                            className={
                                errors.username ? style.warning : style.input
                            }
                        />
                    </div>
                    {errors.username && (
                        <p className={style.danger}>{errors.username}</p>
                    )}
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Insert your password"
                            value={userData.password}
                            onChange={handleInputChange}
                            className={
                                errors.password ? style.warning : style.input
                            }
                        />
                    </div>
                    {errors.password && (
                        <p className={style.danger}>{errors.password}</p>
                    )}
                </div>
                <button type="submit" className={style.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Form;
