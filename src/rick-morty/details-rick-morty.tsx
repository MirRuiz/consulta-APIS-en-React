import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPageRickMorty: React.FC = () => {
    const { id } = useParams();

    
    // React.useEffect(() =>{
    //     // fetch(`https://rickandmortyapi.com/api/character/1`)
    //     // .then((response) =>  console.log(response))

    // }, [])
   
    return (
        <>
            <h2>Details page</h2>
            <h3>Character Id: {id}</h3>
            <Link to="/list-rickymorty">Back to list page</Link>
        </>
    )

}