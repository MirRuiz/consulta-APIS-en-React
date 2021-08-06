import React from "react";
import { MemberEntity } from "./list";
import { Link, generatePath } from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export interface Props {
  member: MemberEntity,

}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;
  return (

    <TableRow hover>
      <TableCell align="center"><img src={member.avatar_url} style={{ width: "5rem" }} /></TableCell>
      <TableCell align="center" >{member.id}</TableCell>
      <TableCell align="center">
        <Link to={generatePath("/detail/:id", { id: member.id })}>
          {member.login}
        </Link></TableCell>

    </TableRow>
  )

}