import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"
import "./resources/css/MenuBar.css"

export default function MenuBar(){

    return <nav className="navigator">
        <ul>
            <CustomLink to="/"  text="Home"></CustomLink>
            <CustomLink to="/About" text="About"></CustomLink>
            <CustomLink to="/Projects" text="Projects" ></CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, text, ...props}){

    const resolvedPath = useResolvedPath(to)
    const isCurrent = useMatch({path:resolvedPath.pathname, end:true })

    return(
        <li className={isCurrent ? "active" : "" }>
            <Link to={to} {...props}> 
            {isCurrent ? (
                    <span className="bold-text">
                        <span className="bracket">{'{'}</span>
                        {text}
                        <span className="bracket">{'}'}</span>
                    </span>
                ) : (
                    text
                )}
            </Link>
        </li>
    )

}