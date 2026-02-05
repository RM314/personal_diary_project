import AddEntryButton from "./components/AddEntryButton"
import AddEntryModal from "./components/AddEntryModal"
import EntryList from "./components/EntryList"
import ViewEntryModal from "./components/ViewEntryModal"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { useState } from 'react';
import { loadDiaryEntries } from "./util/storage";

function App() {

  const [entries, setEntries] = useState(loadDiaryEntries());
  const [addEntry, setAddEntry]=useState(false);


  //setAddEntry(true);

  return (
    <>
    <Header />
    <main>
      <AddEntryButton setAddEntry={setAddEntry} /> {/*This button should open the AddEntryModal when clicked, which contains the EntryForm*/}
      <EntryList entries={entries} /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
    </main>
    <Footer />
    <AddEntryModal onDiaryAdded={handleNewEntry} onClose={() => setAddEntry(false)} isOpen={addEntry} /> {/*This modal shows up based on state*/}
    {/* <ViewEntryModal />  This modal shows up based on state */}
    </>
  )

  function handleNewEntry(newEntry) {
    setEntries([...entries, newEntry]); // ← Just add to existing state
  }
}

export default App;
