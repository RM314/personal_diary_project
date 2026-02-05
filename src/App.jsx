import { useState } from "react"
import AddEntryModal from "./components/AddEntryModal"
import EntryList from "./components/EntryList"
import ViewEntryModal from "./components/ViewEntryModal"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { useState } from 'react';
import { loadDiaryEntries } from "./util/storage";

function App() {
  const [isAddEntryModalOpen, setAddEntryModalOpen] = useState(false);
  const [isViewEntryModalOpen, setViewEntryModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const openViewEntryModal = (entry) => {
    setSelectedEntry(entry);
    setViewEntryModalOpen(true);
  };

  const closeViewEntryModal = () => {
    setSelectedEntry(null);
    setViewEntryModalOpen(false);
  };

  const closeAddEntryModal = () => {
    setAddEntryModalOpen(false);
  };

  const [entries, setEntries] = useState(loadDiaryEntries());

  return (
    <>
    <Header />
    <main>
      <EntryList onClick={openViewEntryModal} /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
    </main>
    <Footer />
    {isAddEntryModalOpen && <AddEntryModal onClose={closeAddEntryModal} onSave={"/*here we need to add a function to save the new entry and close the modal*/"}/>}
    {isViewEntryModalOpen && <ViewEntryModal entry={selectedEntry} onClose={closeViewEntryModal} />}
    </>
  )

  function handleNewEntry(newEntry) {
    setEntries([...entries, newEntry]); // ← Just add to existing state
  }
}

export default App;
