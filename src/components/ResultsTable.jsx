import { formatter } from "../util/investment.js";
export default function ResultsTable ({row}) {
    return(
        <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
        </tr>
    );
}