import '../../../css/button.css';

export default function ButtonFlex({ children, onClick }) {
  return (
    <button className="buttonFlex" onClick={onClick}>
      {children}
    </button>
  );
}
