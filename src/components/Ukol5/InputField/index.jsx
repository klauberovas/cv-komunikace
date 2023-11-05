import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const addName = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        value={value}
        onChange={addName}
        className="input-field__input"
        type={type}
      />
    </div>
  );
};
