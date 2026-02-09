
// todo
// nach datum sortieren
// buttons im removedings stylen
// aktuell ist das speichern in storage deaktiviert
// idee: nur noch im storage speichern und draussen einfach laden
// was wenn im edit das datum geändert wird ??

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
    isEditRef.current=false;
    setSelectedEntry(null);
    setAddEntryModalOpen(true);
  };

  const editEntry = (entry) => {
    isEditRef.current=true;
    setSelectedEntry(entry);
    setViewEntryModalOpen(false);
    setAddEntryModalOpen(true);
  };

  const handleNewEntry = (newEntry) => {
    console.log("handleNewEntry, isEdit=",isEditRef.current," al ",entries.length)
    if (!isEditRef.current) {
      const entry= {
        ...newEntry,
        id: crypto.randomUUID()
        //id: Date.now() contrary to storage.js
      };
      console.log("in new",entries.length);
      console.log("id= ",entry.id);
      //setEntries([...entries, entry]); // could be it's async
      setEntries(prev => {
        const updated = [...prev, entry];
        const sorted=updated.toSorted((a, b) => b.date.localeCompare(a.date))
        console.log(sorted.map(e => e.id));
        return sorted;
      });

      //setEntries(prev => {
      //  const updated = prev.map(e => (e.id === newEntry.id) ? newEntry : e);
      //  return [...updated].sort( (a, b) => b.date.localeCompare(a.date) );
      //});

    } else {
      console.log("in edit",entries.length);
      console.log("id= ",newEntry.id);
      setEntries(prev => {
        const updated = prev.map(e => (e.id === newEntry.id) ? newEntry : e);
        /*
        console.log("in dings2",updated.length);
        console.log("updated");
        console.log(updated.map(e => e.date));
        console.log(updated.map(e => [e.date, typeof e.date]));
        console.log("vergleich: ",updated[0].date.localeCompare(updated[1].date));
        */
        //console.log(updated);
        //const sorted=[...updated].sort( (a, b) => b.date.localeCompare(a.date) );
        const sorted=updated.toSorted((a, b) => b.date.localeCompare(a.date))
        /*
        console.log("in ding3",sorted.length);
        console.log("sorted");
        console.log(sorted.map(e => e.date));
        console.log(sorted.map(e => [e.date, typeof e.date]));
        */
        //console.log(sorted);
        console.log(sorted.map(e => e.id));
        return sorted;
      });
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

const removeEntryNo = () => {
 setRemoveModalOpen(false);
 setViewEntryModalOpen(false);
}

const removeEntry = (entry) => {
 setSelectedEntry(entry);
 console.log(entry);
 setRemoveModalOpen(true);
};

  return (
    <>
      <Header onAddClick={openAddEntryModal} />
      <main>
        <EntryList onClick={openViewEntryModal} removeEntry={removeEntry} editEntry={editEntry} entries={entries} /> {/*This displays the list of EntryCard and opens ViewEntryModal when clicked, which displays EntryDetails*/}
      </main>
      <Footer />
        <AddEntryModal isOpen={isAddEntryModalOpen} onClose={closeAddEntryModal} onAddEntry={handleNewEntry} entry={selectedEntry}/>
        <ViewEntryModal isOpen={isViewEntryModalOpen} onClose={closeViewEntryModal} removeEntry={removeEntry} editEntry={editEntry}  entry={selectedEntry} />
        <ConfirmRemoveModal open={isRemoveModalOpen} selectedEntry={selectedEntry}  onYes={removeEntryYes}  onNo={removeEntryNo}  />
    </>

  );
}


export default App;