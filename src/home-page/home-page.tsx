import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./home-page.css";

export const HomePage: React.FC = () => {
    const history = useHistory();

    const onGithubNavigation = (event: React.MouseEvent<HTMLElement>) => {
        history.push("/list")
    }
    const onRickMortyNavigation = (event) => {
        history.push("/list-rickymorty")

    }

    return (
        <main>
        <button className="botones yellow" onClick={onGithubNavigation}> Github organization API</button>
        <button className="botones blue" onClick={onRickMortyNavigation}> Rick and Morty API</button>
        </main>
    )
}