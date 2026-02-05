import EntryDetails from "./EntryDetails.jsx";

const entry = {
    title: "my best experience",
    date: "02. 03. 2025",
    picture: "https://img.fotocommunity.com/wir-ueben-7d4680fd-c687-4001-92a5-3738b1f82e6d.jpg?height=1080",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam "
};

const ViewEntryModal = () => {

    return (
    <div>
        <EntryDetails key={entry.date} entry={entry}/>
    <button>Close</button>
    </div>
    );

};

export default ViewEntryModal;
