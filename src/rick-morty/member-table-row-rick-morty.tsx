import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MemberRickMorty } from "./list-rickymorty";
import { generatePath, Link } from "react-router-dom"

interface PropsRickMorty {
    member: MemberRickMorty
}

export const MemberTableRowRickMorty: React.FC<PropsRickMorty> = (props) => {
    const { member } = props;

    return (
        <TableRow>
            <TableCell align="center"><img src={member.image} style={{ width: "5rem" }} /></TableCell>
            <TableCell align="center">{member.id}</TableCell>
            <TableCell align="center">
                <Link to={generatePath("/details-rick-morty/:id", { id: member.id })}>
                    {member.name}
                </Link>
            </TableCell>
        </TableRow>

    )

}
