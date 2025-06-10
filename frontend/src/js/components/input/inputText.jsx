import '../../../css/input.css';

export default function InputText({ type = 'text', value, onChange, placeholder, required = false }) {
    return (
        <div className="inputText">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}