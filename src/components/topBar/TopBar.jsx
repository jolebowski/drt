import {Email, Person} from '@material-ui/icons'
import './topBar.scss'
export const TopBar = () => {
  return (
    <div className='topBar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo' >DRT CHAUFFAGE</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>010101010101</span>
          </div>
          <div className="itemContainer">
              <Email className='icon'/>
            <span>chauffageDRT@hotmail.com</span>
          </div>
        </div>
        <div className="right">
            <a href="#intro" >Into</a>
            <a href="#contact"  >Contact</a>
            <a href="#contact"  >Contact</a>

        </div>
      </div>
    </div>
  )
}
