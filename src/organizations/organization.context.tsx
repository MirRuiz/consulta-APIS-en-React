import React from "react";

//que modelo va exponer mi provider al resto de componentes
 interface Organization {
     organization : string;
 }
 interface OrganizationContextModel {
     organization: Organization;
     setOrganization: (organization: Organization) => void;
 }

 //como creo un contexto para este modelo que quiero exponer?

export const OrganizationContext = React.createContext<OrganizationContextModel>(null)
console.log(OrganizationContext)
//como persisto y expongo estos datos del xcontexto al resto de componentes => PROVIDER

export const OrganizationProvider: React.FC = (props) =>{
    const {children} = props

    const [organization, setOrganization] = React.useState<Organization>("Lemoncode")

    return <OrganizationContext.Provider value={{organization, setOrganization} }>
        {children}
    </OrganizationContext.Provider>
}

