interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"; // optional property
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      color={color}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
