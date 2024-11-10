import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from './EmployeeList'

function HomePage() {
    return (
        <div style={homepageStyle}>
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}

const homepageStyle = {
    border: '4px solid orange',
    width: '500px',
    height: '642px',
    margin: '20px 20px 20px 100px',
    //marginTop: '5%',
    padding: '1px',
    //paddingBottom: '0px',
    backgroundColor: 'white'
};

export default HomePage