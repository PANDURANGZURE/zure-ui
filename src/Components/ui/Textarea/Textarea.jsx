import styles from "./textarea.module.css";

export const Textarea = ({
  label,
  value,
  onChange,
  placeholder = " ",
  variant = "default",
  size = "md",
  color = "#000",
  error = false,
  disabled = false,
  rows = 4,
  resize = "vertical",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ "--zure-color": error ? "red" : color }}
    >
      <textarea
        className={`${styles.textarea} ${styles[variant]} ${styles[size]} ${styles[resize]}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        aria-invalid={error}
        {...props}
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
