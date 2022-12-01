const PersonOverview = (props) => {
    const person = props.person
    return (
        <div>
            <h1>{person.forename} {person.surname} ({props.person.city})</h1>
        </div>
    )
}

export default PersonOverview