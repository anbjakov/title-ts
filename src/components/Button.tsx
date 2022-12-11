type ButtonProps = {
  onClick: () => void;
  children: string;
};

const Button = ({ onClick, children = "Open Title" }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
