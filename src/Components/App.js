import './App.css';
import './../style/reset.css'
import './../style/base.css'
import Header from "./Header/Header";
import RightSide from "./RightSide/RightSide";



function App() {
    return (
        <div className="App">
            <Header/>
            <RightSide/>
        </div>
    );
}

export default App;
