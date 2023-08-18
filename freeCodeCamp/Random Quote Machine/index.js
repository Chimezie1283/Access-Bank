function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#0fbfbf")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    },  [])

    const getNewQuote = () => {

        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
          ];


        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }

    return (
<wrapper id="quote-box">
    <div style={{backgroundColor: color, minHeight: "100vh"}}>


        <div className="container pt-5">
            <div className="jumbotron" style={{backgroundColor: "yellow", color: "black", minHeight: "40vh"}}>
                <div className="card">
                    <div className="card-header text-center red-text" style={{backgroundColor: "orange", minHeight: "2vh", width:"100%"}}><h3>Inspirational Quotes</h3></div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                            <h4 id="author" className="card-title" style={{color: color, font: "Sofia"}}>- {randomQuote.author || "No author"}</h4>
                            <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                            <h2>Processing, take a chill</h2>
                        )}

                        <div className="column">
                            <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="btn btn-warning">
                                <i className="fa fa-twitter">tweet</i>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="btn btn-danger">
                                <i className="fa fa-linkedin">LinkedIn</i>
                            </a>
                        </div>
                    </div>
                </div>
                <footer id="footer"><a href="https://github.com/Chimezie1283" target="_blank" id="sign">by @Chimezie</a></footer>
            </div>

        </div>
    </div>
</wrapper>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"))