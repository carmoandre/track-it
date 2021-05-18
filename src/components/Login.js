import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/logoVector.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <BlankPage>
            <img src={image} alt="Vetores que compõe a logo do Track It" />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <OutsideButton>Entrar</OutsideButton>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </BlankPage>
    );
}

const BlankPage = styled.main`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;

    img {
        margin: 68px 0 33px 0;
    }

    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-family: "Lexend Deca", sans-serif;
        font-size: 20px;
        padding-left: 11px;
    }

    input::placeholder {
        color: #dbdbdb;
    }

    p {
        text-decoration: underline;
        color: #52b6ff;
    }
`;

const OutsideButton = styled.button`
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 21px;
    font-family: "Lexend Deca", sans-serif;
    margin-bottom: 25px;
`;
