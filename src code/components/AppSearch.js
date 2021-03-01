import "./AppSearch.css";

function AppSearch(props) {
    const{value , onvaluechange} = props;
    return (<div className="app-search">
        <input
            className="app-search-input"
            type="text"
            placeholder="Search Football Player"
            value={value}
            onChange={(event) => {onvaluechange(event.target.value) }}
        />
    </div>
    );
}

export default AppSearch;