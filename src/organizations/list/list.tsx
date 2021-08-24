import React from "react";
import { MemberTableRow } from "../member-table/members-table-row";
import { MemberTable } from "../member-table/member-table";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import { OrganizationContext } from "../organization.context";
import "./list.css";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization, setOrganization } = React.useContext(OrganizationContext)

  const handleClick = () => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
  }
  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleClick()
    }
  }

  React.useEffect(() => {
    handleClick()
  }, []);

  return (
    <>
      <div >
        <h2>Página de búsqueda de organizaciones</h2>
        <TextField
          label="Organization"
          id="outlined-size-small"
          defaultValue={organization}
          variant="outlined"
          color="primary"
          size="small"
          onChange={(e) => setOrganization(e.target.value)}
          onKeyPress={(e) => handleEnter(e)}
          />
        <Button className="input" variant="outlined" color="primary" href="#outlined-buttons" onClick={handleClick} >
          
          Buscar
        </Button>
      </div>

      <div>
        <MemberTable>
          {members.length > 0 ?
            members.map((member) => (
              <MemberTableRow key={member.id} member={member} />
            )) : <tr><td>{organization} no existe o no tiene resultado</td></tr>}
        </MemberTable>
      </div>
      <div>
        <Button variant="outlined" color="primary" href="http://localhost:8080/home-page"  >
          Volver a la página de selección de API
        </Button>
      </div>
    </>
  )
}

