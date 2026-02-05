const EntryDetails = (entry) => {

    return (
    <div>
        <label>
          Title: {entry.title}
        </label>
        <label>
            Date: {entry.date}
        </label>
        <label>
            Picture: <img src={entry.imageUrl} alt="Diary entry image" className="w-64 h-64 object-cover rounded-lg" />
        </label>
        <label>
            Content: {entry.content}
        </label>
    </div>
    );

};

export default EntryDetails;