import '../App.css';

function Art(props) {

    // console.log("Art ", props.data);
    let artistName = props.data.artistDisplayName;
    let artURL = props.data.primaryImage;
    let artTitle = props.data.title;

    return (
            <div className="App-content">
                <img src={ artURL } className="App-logo" alt="Museum Art Image" />
                <p>{ artTitle }</p>
                <p>{ artistName } </p>
            <footer className="App-footer">
                <p> Akash Selvakumar | akashs1@umbc.edu | Entera Assessment July 12, 2022 </p>
            </footer>
            </div>
    );
}

export default Art;
