import '../Styles/style.css';
import { Link } from 'react-router-dom';

function Employees() {
    return (
        <main>
            <h1>Employees 🧑‍💼</h1>

            <table>

                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                </tr>

                <tr>
                    <td>Ali</td>
                    <td>ali@gmail.com</td>
                    <td>123456</td>
                    <td>Keeper</td>
                </tr>

                <tr>
                    <td>Sara</td>
                    <td>sara@gmail.com</td>
                    <td>654321</td>
                    <td>Guide</td>
                </tr>

                <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>111222</td>
                    <td>Veterinarian</td>
                </tr>

            </table>

        </main>
    );
}

export default Employees;