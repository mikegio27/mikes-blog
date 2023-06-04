export default function Header(props) {
    let title = props.title
    return (
        <h1 className="header">{title}, {formatName(props.firstName, props.lastName)}</h1>
    )
}

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}