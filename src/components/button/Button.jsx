// In .jsx files gaat react code en javascript code

import './Button.css';

const Button = ({ onclick, children}) => {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;

