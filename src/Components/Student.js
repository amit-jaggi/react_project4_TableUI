import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom'

const studentDetails = [
    {
        "ID": "1",
        "Name": "Abhishek Singh",
        "Age": "25",
        "Course": "BCA",
        "Batch": "2021",
    },
    {
        "ID": "2",
        "Name": "Kunal Sengupta",
        "Age": "26",
        "Course": "MCA",
        "Batch": "2011"
    },
    {
        "ID": "3",
        "Name": "Souri Bhattacharya",
        "Age": "29",
        "Course": "B. Sc.",
        "Batch": "2021"
    },
    {
        "ID": "4",
        "Name": "Raj Agarwal",
        "Age": "32",
        "Course": "M. Tech.",
        "Batch": "2022"
    },
    {
        "ID": "5",
        "Name": "Deepak Pradhan",
        "Age": "30",
        "Course": "IIT",
        "Batch": "2017"
    },
    {
        "ID": "6",
        "Name": "Simran Jaiswal",
        "Age": "25",
        "Course": "B. Com",
        "Batch": "2020"
    }
];

const Student = () => {
    return (
        <>
            <div className="title-container">
                <h1 className="title">STUDENT PAGE</h1>
                <button className="add-student-btn">Add Student</button>
            </div>
            <div className="table-container">
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{width: 175}}>Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Course</TableCell>
                                <TableCell align="center">Batch</TableCell>
                                <TableCell align="center">Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                studentDetails.map(student => {
                                    const { ID, Name, Age, Course, Batch } = student;
                                    return (
                                        <TableRow key={ID}>
                                            <TableCell component="th" scope="row">{Name}</TableCell>
                                            <TableCell align="center">{Age}</TableCell>
                                            <TableCell align="center">{Course}</TableCell>
                                            <TableCell align="center">{Batch}</TableCell>
                                            <TableCell align="center"><Link to=""><ModeEditIcon /></Link></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Student;