
// todo
// nach datum sortieren
// buttons im removedings stylen
// vom modal aus editieren

import { useState } from "react"
import AddEntryModal from "./components/AddEntryModal"
import EntryList from "./components/EntryList"
import ConfirmRemoveModal from "./components/ConfirmRemoval"
import ViewEntryModal from "./components/ViewEntryModal"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { loadDiaryEntries, saveDiaryEntries } from "./util/storage";
import { useEffect, useRef } from "react";

function App() {
  const [isAddEntryModalOpen, setAddEntryModalOpen] = useState(false);
  const [isViewEntryModalOpen, setViewEntryModalOpen] = useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [entries, setEntries] = useState(loadDiaryEntries());

  const isEditRef = useRef(false);

  useEffect(() => {
    console.log("in effect len=",entries.len);
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
    console.log("hier openAddEntryModal",isEdit);
    isEditRef.current=false;
    setSelectedEntry(null);
    setAddEntryModalOpen(true);
  };

  const editEntry = (entry) => {
    isEditRef.current=true;
    console.log("hier editEntry",isEditRef.current);
    setSelectedEntry(entry);
    setAddEntryModalOpen(true);
    console.log("hier2 editEntry",isEditRef.current);
  };

  const handleNewEntry = (newEntry) => {
    console.log("handleNewEntry, isEdit=",isEditRef.current," al ",entries.length)
    if (!isEditRef.current) {
      const entry= {
        id: Date.now(), // contrary to storage.js !
        ...newEntry
      };
      setEntries([...entries, entry]); // could be it's async
    } else {
     console.log("id= ",newEntry.id);
     setEntries(prev => prev.map(e => (e.id === newEntry.id) ? newEntry : e));
    }
    console.log("al2 ",entries.length);
    closeAddEntryModal();
};

const removeEntryYes = (entry) => {
 entries.splice(entries.indexOf(entry), 1);
 setEntries(entries.filter(el => el != entry));
 setSelectedEntry(null);
 // save done by effect
 setRemoveModalOpen(false);
  setViewEntryModalOpen(false);
}

const removeEntryNo = (entry) => {
 setRemoveModalOpen(false);
 setViewEntryModalOpen(false);
}

const removeEntry = (entry) => {
 setSelectedEntry(entry);
 console.log(entry);
 setRemoveModalOpen(true);
};

 console.log("miten drin ",entries.length);

  return (
    <>
      <Header onAddClick={openAddEntryModal} />
      <main>
        <EntryList onClick={openViewEntryModal} removeEntry={removeEntry} editEntry={editEntry} entries={entries} /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
      </main>
      <Footer />
        <AddEntryModal isOpen={isAddEntryModalOpen} onClose={closeAddEntryModal} onAddEntry={handleNewEntry} entry={selectedEntry}/>
        <ViewEntryModal isOpen={isViewEntryModalOpen} onClose={closeViewEntryModal} removeEntry={removeEntry} entry={selectedEntry} />
        <ConfirmRemoveModal open={isRemoveModalOpen} selectedEntry={selectedEntry}  onYes={removeEntryYes}  onNo={removeEntryNo}  />
    </>

  );
}


export default App;