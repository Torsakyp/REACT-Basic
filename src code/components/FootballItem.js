import './FootballItem.css';
function FootballItem(props){
    const{football , onFootballClick} = props;
    return (
        <div className='football-item'> 
            <img src={football.thumbnailUrl} onClick={() => {onFootballClick(football)}}/>  
            <h4> {football.title} </h4>
        </div>
    );
}

export default FootballItem;