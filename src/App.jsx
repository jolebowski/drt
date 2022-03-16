import { TopBar } from './components/topBar/TopBar';
import {Intro} from './components/intro/Intro'
function App() {
    return (
        <div className='app'>
            <TopBar />
            <div className="sections">
                <Intro />
            </div>
        </div>
    );
}

export default App;
