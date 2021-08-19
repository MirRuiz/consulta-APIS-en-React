import React from "react";
import { MemberTableRickMorty } from "./member-table-rick-morty";
import { MemberTableRowRickMorty } from "./member-table-row-rick-morty";
import { useDebounce } from 'use-debounce';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export interface MemberRickMorty {
    id: string,
    name: string,
    image: string,
}

export const ListRickMorty = () => {

    const [members, setMembers] = React.useState<MemberRickMorty[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const [memberDebounce] = useDebounce(inputValue, 1000)

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/`)
            .then((response) => response.json())
            .then((characterslist) => setMembers(characterslist.results))
    }, [])
    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
            .then((response) => response.json())
            .then((characters) => setMembers(characters.results ?? []))

    }, [memberDebounce])

    return (
        <>
            <div style={{ textAlign: "center", margin: "auto" }}>
                <h2>Página de busqueda miembros de Rick y Morty</h2>
                <TextField
                    label="Character"
                    id="outlined-size-small"
                    variant="outlined"
                    color="primary"
                    size="small"
                    onChange={(e) => setInputValue(e.target.value)}

                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MemberTableRickMorty>
                    {members.length > 0 ?
                        members.map((member) => (
                            <MemberTableRowRickMorty key={member.id} member={member} />
                        )) : <tr><td> No existe ningun personaje: {inputValue} </td></tr>}
                </MemberTableRickMorty>
            </div>
            <div>
                <Button variant="outlined" color="primary" href="http://localhost:8080/home-page"  >
                    Volver a la página de selección de API
                </Button>
            </div>

        </>
    )
}