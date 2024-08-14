import "./App.css";
import ProviderApp from "./ProviderApp";
import HomePage from "./components/homePage/HomePage";

function App() {
    return (
        <div>
            <ProviderApp>
                <HomePage />
            </ProviderApp>
        </div>
    );
}

export default App;
