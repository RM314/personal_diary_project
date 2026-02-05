import logo from '../assets/logo.png';
import AddEntryButton from './AddEntryButton';

const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="Diary Logo" />
        <h1>My Personal Diary</h1>
        <AddEntryButton onClick={() => setAddEntry(true)} /> {/*This button should open the AddEntryModal when clicked, which contains the EntryForm*/}
    </div>
  )
}

export default Header;  