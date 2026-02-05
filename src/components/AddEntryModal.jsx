import EntryForm from "./EntryForm.jsx";


const AddEntryModal = ({ onDiaryAdded }) => {
  const handleSubmit = (newEntry) => {
    console.log(`Adding to console`, newEntry);
    onDiaryAdded(newEntry); // callback to parent to refresh the list
  };

  return (
    <div>
      <EntryForm handleSubmit={handleSubmit} />
      <button>Close</button>
    </div>
  );
};

export default AddEntryModal;