import { TopBar } from './components/topBar/TopBar';
import {Intro} from './components/intro/Intro'
import {Contact} from'./components/contact/Contact'
import './app.scss'
function App() {
    return (
        <div className='app'>
            <TopBar />
            <div className="sections">
                <Intro />
                <Contact />
                <Intro />

                <Contact />
                <Intro />

                <Contact />
                <Contact />
                <Contact />

            </div>
        </div>
    );
}

export default App;
