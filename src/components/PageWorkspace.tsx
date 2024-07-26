import { ReactNode } from "react"
import "../components/componentCss/pageWorkspace.css"

interface PageWorkspaceProps{
    children: ReactNode;
}


const PageWorkspace = ({children}: PageWorkspaceProps) => {
  return (<div className="page">{children}</div>
  )
}

export default PageWorkspace