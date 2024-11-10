function EmployeeListItem() {
    return (
        <div style={{ border: '2px solid red', margin: '2px 1px' }}>
            <div className="empListItem" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://via.placeholder.com/80"
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
                    <h4 style={{ color: 'black', margin: 0, fontSize: '16px' }}>Full Name</h4>
                    <p style={{ color: 'grey', margin: 0, fontSize: '14px' }}>Role or Designation</p>
                </div>
            </div>
        </div>
    );
}



export default EmployeeListItem