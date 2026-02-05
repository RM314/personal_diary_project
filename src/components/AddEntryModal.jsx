import EntryForm from "./EntryForm.jsx";

/*
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

*/


const AddEntryModal = ({ onDiaryAdded,  isOpen, onClose }) => {

  console.log("AddEntryModal gerendert – isOpen =", isOpen);

  const handleSubmit = (newEntry) => {
    console.log(`Adding to console`, newEntry);
    onDiaryAdded(newEntry); // callback to parent to refresh the list
    onClose();
  };

    if (!isOpen) return null;

    return (
    <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={onClose}
        >
        <div
            className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <button
            onClick={onClose}
            className="absolute top-3 right-3 px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
            >
                Close
            </button>

        <div>
          <EntryForm handleSubmit={handleSubmit} onClose={onClose} />
        </div>
        </div>
    </div>
    );
};


export default AddEntryModal;