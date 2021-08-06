import React from "react";
import {useHistory} from "react-router-dom";

export const HomePage: React.FC = () => {
    const history = useHistory();

    const onGithubNavigation = (event: React.MouseEvent<HTMLElement>) => {
        history.push("/list")
    }
    const onRickMortyNavigation = (event) =>{
        history.push("/list-rickymorty")

    }

    return(
        <>
        <button onClick={onGithubNavigation}> Github organization API </button>
        <button onClick={onRickMortyNavigation}> Rick and Morty API</button>
        </>
    )
}