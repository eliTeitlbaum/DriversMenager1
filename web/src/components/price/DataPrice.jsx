import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin7Fill } from "react-icons/ri";


function DataPrice({data, editClick, deleteClick}) {

    return (
    <table className={"Appprice-data"}>
        <thead>
            <tr>
                {
                    ["מס'", "מקור", "יעד", "מחיר", "עדכן", "מחיקה", "עובד"].map((value, key) => (
                        <th key={key}> {value} </th>
                    ))
                }
            </tr>
        </thead>

        <tbody>
                {
                    Object.keys(data).map((keyData, key) => (
                        <tr key={key}>
                            <td key={1}> {key + 1} </td>
                            <td key={2}> {data[keyData][0]} </td>
                            <td key={3}> {data[keyData][1]} </td>
                            <td key={4}> {data[keyData][2]} </td>
                            <td className={"edit"} key={5} onClick={() => editClick(keyData)}> <LiaEdit /> </td>
                            <td className={"delete"} key={6} onClick={() => deleteClick(keyData)}> <RiDeleteBin7Fill /> </td>
                            <td key={7}> {data[keyData][3]} </td>
                        </tr>
                    ))
                }
        </tbody>
    </table>
    );
}

export default DataPrice;
