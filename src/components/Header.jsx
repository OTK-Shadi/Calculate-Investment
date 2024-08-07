import image from "../assets/investment-calculator-logo.png"
export default function Header ({...props}) {
    return (
        <div id="header">
            <img src={image} alt="logo"/>
            <h1>Investment Calculater</h1>
        </div>
    );
}