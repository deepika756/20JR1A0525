import logo from './logo.svg';
import './App.css';

function App() {
return (
<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
        </a>
        <center>
            <a href="http://20.244.56.14/numbers/primes" target="_blank">Prime</a>
            <a href="http://20.244.56.14/numbers/fibo" target="_blank">Fibo</a>
            <a href="http://20.244.56.14/numbers/odd" target="_blank">Odd</a>
            <a href="http://20.244.56.14/numbers/rand" target="_blank">Rand</a>
        </center>
        <form action="http://20.244.56.144/train/register" method="post"></form>
        <form action="http://20.244.56.144/train/auth/" method="post"></form>
        <form method="get" action="http://20.244.56.144:80/train/trains">
            <input type="search" name="location" placeholder="Search.." />
            <input type="submit" value="Go" />
        </form>
        <form method="get" action="http://20.244.56.144/train/trains/2344">
            <input type="search" name="location" placeholder="Search.." />
            <input type="submit" value="Go" />
        </form>
    </header>
</div>
);
}

export default App;
