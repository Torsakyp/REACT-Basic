import './FootballPost.css';
function FootballPost(props){
    const{football , onBigClick} = props;
    return(
        <div className="football-post">
             <div className="football-post-bg" onClick={onBigClick} />
            <div className="football-post-content">
                <img src={football.thumbnailUrl}/> 
                <h4> {football.title }</h4>
            </div> 
        </div>
    );
}

export default FootballPost;