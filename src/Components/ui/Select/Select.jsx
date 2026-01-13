import styles from "./select.module.css";

export const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = " ",
  variant = "default",
  size = "md",
  color = "#000",
  error = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ "--zure-color": error ? "red" : color }}
    >
      <select
        className={`${styles.select} ${styles[variant]} ${styles[size]}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      >
        {/* Placeholder option */}
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
