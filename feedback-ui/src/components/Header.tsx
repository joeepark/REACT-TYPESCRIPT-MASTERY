interface textProps {
  text: string;
  bgColor: string;
  textColor: string;
}

export default function Header({ text, bgColor, textColor }: textProps) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header>
      <div className="container">
        <h2 style={headerStyles}>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'FEEDBACK UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};
