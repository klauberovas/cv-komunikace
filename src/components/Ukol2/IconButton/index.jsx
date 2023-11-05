import './style.css';

export const IconButton = ({ label, onSelectName }) => {
  const selectName = () => {
    onSelectName(label);
  };

  return (
    <button onClick={selectName} className="icon-button">
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
