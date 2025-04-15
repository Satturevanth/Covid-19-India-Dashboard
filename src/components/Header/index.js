import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  getLogo = () => (
    <Link to="/" className="link" aria-label="COVID19INDIA">
      <h1 className="logo">
        COVID19 <span className="india">INDIA</span>
      </h1>
    </Link>
  )

  showDropDownMenu = () => (
    <ul className="navBar">
      <Link to="/" className="link">
        <li className="item">Home</li>
      </Link>
      <li className="item">Vaccination</li>
      <Link to="/about" className="link">
        <li className="item">About</li>
      </Link>
    </ul>
  )

  render() {
    const {isToggleActive} = this.state

    return (
      <>
        <div className="header-container">
          {this.getLogo()}
          <ul className="navBar">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
            <li className="item">Vaccination</li>
            <Link to="/about" className="link">
              <li className="item">About</li>
            </Link>
          </ul>
        </div>

        <div className="mobile-menu">
          <div className="mobile-header-container">
            {this.getLogo()}
            <button
              type="button"
              className="toggle-button"
              onClick={this.whenToggleButtonClick}
            >
              <img src="/img/add-to-queue 1.png" alt="menu" />
            </button>
          </div>

          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : ''}
          </div>
        </div>
      </>
    )
  }
}

export default Header
