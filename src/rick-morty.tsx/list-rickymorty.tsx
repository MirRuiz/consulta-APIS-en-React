import React from "react";
import { MemberTableRickMorty } from "./member-table-rick-morty";
import { MemberTableRowRickMorty } from "./member-table-row-rick-morty"

export interface MemberRickMorty {
    id: string,
    name: string,
    image: string,
}

export const ListRickMorty = () => {

    const [members, setMembers] = React.useState<MemberRickMorty[]>([]);
    const [inputValue, setInputValue] =React.useState("")

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/`)
            .then((response) => response.json())
            .then((characterslist) => setMembers(characterslist.results))
    }, [])
    React.useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        .then((response) => response.json())
        .then((characters) => setMembers(characters.results))

    },[inputValue])

    return (
        <>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <MemberTableRickMorty>
                {members.map((member) => (
                    <MemberTableRowRickMorty key={member.id} member={member}>
                    </MemberTableRowRickMorty>
                ))}
            </MemberTableRickMorty>

        </>
    )
}