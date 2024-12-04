
const MyComponent = () => {
    return (
        <div>
            <h1>React-ის მაგალითი</h1> {/* ეს არის სათაური */}
            <p>ეს არის პირველი პარაგრაფი.</p> {/* ტექსტი */}
            <p>ეს არის მეორე პარაგრაფი.</p> {/* ტექსტი */}
            <button>დაჭირე აქ</button> {/* ღილაკი */}
            <button>მეორე ღილაკი</button> {/* ღილაკი */}
        </div>
    );
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));
