import { TopBar } from './components/topBar/TopBar';
import {Intro} from './components/intro/Intro'
import { Service } from './components/service/Service';
import {Contact} from'./components/contact/Contact'
import './app.scss'
function App() {
    return (
        <div className='app'>
            <TopBar />
            <div className="sections">
                <Intro />
                <Service />
                <Contact />
            </div>
        </div>
    );
}

export default App;
