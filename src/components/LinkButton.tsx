import { Link } from "react-router-dom";
import "../components/componentCss/linkButton.css"

interface LinkButtonProps {
  text: string;
  adress: string;
}

const LinkButton = ({ text, adress }: LinkButtonProps) => {
  return (
    <Link
      to={adress}
      className="btn btn-primary" 
      id="link-button"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
