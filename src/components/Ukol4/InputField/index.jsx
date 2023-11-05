import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const addName = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        onChange={addName}
        value={value}
        className="input-field__input"
        type={type}
      />
    </div>
  );
};
