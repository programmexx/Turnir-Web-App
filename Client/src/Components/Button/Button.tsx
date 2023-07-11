interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Custom properties go here
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ disabled, children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
