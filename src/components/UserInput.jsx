export default function UserInput ({label, type, onType, val}) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" value={val} required onChange={(event) => onType(event, type)}/>
        </p>
    );
}