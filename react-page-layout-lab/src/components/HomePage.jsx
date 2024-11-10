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
    border: '3px solid orange',
    width: '500px',
    height: '650px',
    margin: '20px 20px 20px 100px',
    //marginTop: '5%',
    padding: '8px 5px 0px 5px',
    //paddingBottom: '0px',
    backgroundColor: 'ivory'
};

export default HomePage