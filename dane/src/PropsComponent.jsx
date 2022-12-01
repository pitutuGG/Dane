const PropsComponent = (props) => {
    
    const title = props.title.toUpperCase()

    return (
        <div>
            <h1>PropsComponent</h1>
            <p>Tytuł: {title}</p>
            <p>Wiek: {props.age}</p>
        </div>
    )
}

export default PropsComponent