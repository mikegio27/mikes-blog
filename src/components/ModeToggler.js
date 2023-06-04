

function ModeToggler() {
        let darkModeOn = true;
        const darkMode = <h1>Dark Mode Is On</h1>
        const lightMode = <h1>Dark Mode Is off</h1>
        const handleClick = () => {
            darkModeOn = !darkModeOn
            if (darkModeOn === true) {
                console.log("Dark Mode Is On")
            }
            else {
                console.log("Dark Mode Is Off")
            }
        }
        return (
            <div>
                {darkModeOn ? darkMode : lightMode}
                <button onClick={handleClick}>Toggle Mode</button>

            </div>

        )
}

export default ModeToggler;