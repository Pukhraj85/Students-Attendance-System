import React from 'react'

function List({ students, handleEdit, handleDelete }) {

    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //     minimumFractionDigits: null
    // });
    var time = new Date();
    var date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
    var today= time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Roll No.</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        {/* <th>Email</th>
                        <th>Salary</th> */}
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.checkIn}</td>
                                <td>{student.checkOut}</td>
                                {/* <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td> */}
                                <td>{student.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(student.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Students present on {date} till {today} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List