
type Props = {
  icon: JSX.Element;
  children?: React.ReactNode;
  [key: string]: any;
};

const ButtonWithIcon: React.FC<Props> = ({ icon, children, ...props }) => {
  return (
    <button {...props}>
      {icon}
      {"  "}
      {children}
    </button>
  );
};

export default ButtonWithIcon;
