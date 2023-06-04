
export default function Button(props) {
    const signInHandler = () => {
        console.log('Signed In');
    }
    const signOutHandler = () => {
        console.log('Signed Out');
    }
    const mouseOverHandler = () => {
        console.log('mouse over');
    }
    

    if (props.name === 'Sign In') {
        return (
            <div>
                <button onClick={signInHandler}>{props.name}</button>
            </div>
        )
    } else if (props.name === 'Sign Out') {
        return ( 
        <div>
            <button onMouseOver={mouseOverHandler} onClick={signOutHandler}>{props.name}</button>
        </div>
        )
    } 
}


