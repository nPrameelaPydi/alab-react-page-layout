import dummyProfilePic from '../assets/dummyProfilePic.png';

function EmployeeListItem() {
    return (
        <div style={{ border: '3px solid red', margin: '2px 1px' }}>
            <div className="empListItem" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={dummyProfilePic}
                    alt="Employee"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        marginRight: '10px',
                        padding: '10px',
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                    <h4 style={{ color: 'black', margin: 0, fontSize: '16px', padding: '2px' }}>Full Name</h4>
                    <p style={{ color: 'grey', margin: 0, fontSize: '14px' }}>Role or Designation</p>
                </div>
            </div>
        </div>
    );
}



export default EmployeeListItem