import { useState } from "react"
import AddEntryModal from "./components/AddEntryModal"
import EntryList from "./components/EntryList"
import ViewEntryModal from "./components/ViewEntryModal"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { loadDiaryEntries, saveDiaryEntries } from "./util/storage";
import { useEffect } from "react";

function App() {
  const [isAddEntryModalOpen, setAddEntryModalOpen] = useState(false);
  const [isViewEntryModalOpen, setViewEntryModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [entries, setEntries] = useState(loadDiaryEntries());


  useEffect(() => {
   saveDiaryEntries(entries); 
  }, [entries]);

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

  const openAddEntryModal = () => {
    setAddEntryModalOpen(true);
  };

  const handleNewEntry = (newEntry) => {
    const entry= {
      id: Date.now(),
      ...newEntry
    };
    setEntries([...entries, entry]);
    closeAddEntryModal();
};

  return (
    <>
      <Header onAddClick={openAddEntryModal} />
      <main>
        <EntryList onClick={openViewEntryModal} entries={entries} /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
      </main>
      <Footer />
        <AddEntryModal isOpen={isAddEntryModalOpen} onClose={closeAddEntryModal} onAddEntry={handleNewEntry}/>
        <ViewEntryModal isOpen={isViewEntryModalOpen} onClose={closeViewEntryModal} entry={selectedEntry} /> 
    </>

  );
}


export default App; 