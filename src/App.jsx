import AddEntryButton from "./components/AddEntryButton"
import AddEntryModal from "./components/AddEntryModal"
import EntryList from "./components/EntryList"
import ViewEntryModal from "./components/ViewEntryModal"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Header />
    <main>
      <AddEntryButton /> {/*This button should open the AddEntryModal when clicked, which contains the EntryForm*/}
      <EntryList /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
    </main>
    <Footer />
    <AddEntryModal /> {/*This modal shows up based on state*/}
    {/* <ViewEntryModal />  This modal shows up based on state */}
    </>
  )
}

export default App;
