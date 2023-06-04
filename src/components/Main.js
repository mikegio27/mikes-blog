import Sidebar from "./Sidebar"
import Button from '@mui/material/Button';
export default function Main() {
    return (
        <div>
            <div>
                <p>
                    Hello there
                </p>
                <Button variant="contained">It Doesn't Look Like Anything to Me</Button>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )

}