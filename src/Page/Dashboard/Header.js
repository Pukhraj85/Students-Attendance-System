import React from 'react'

function Header({ students, setIsAdding }) {
    var time = new Date();
    var date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
    var today= time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    return (
        <header>
            <h1>Students Attendance Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Students Attendance</button>
            </div>
            <div>
                <b>
                <i>
                    <p>Total students present on <strong>{date}</strong> till <strong>{today}</strong> are <strong>{students.length}</strong> </p>
                </i>
                </b>
            </div>
        </header>
    )
}

export default Header