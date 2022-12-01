const PersonDetails = (props) => {
    return (
        <div>
            <h4>Szczegółowe informacje</h4>
            <p>Imię: {props.person.forename}</p>
            <p>Nazwisko: {props.person.surname}</p>
            <p>Wiek: {props.person.age}</p>
            <p>Miasto: {props.person.city}</p>
            <p>Telefon: {props.person.telephone}</p>
        </div>
    )
}

export default PersonDetails