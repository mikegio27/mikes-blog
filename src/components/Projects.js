
import '../styles/App.css';
import TestButtons from './Skeleton/TestButtons';
export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <p>Here are some of my projects:</p>
            <ul>
                <li><a href="google.com">Project 1</a></li>
                <li><a href="google.com">Project 2</a></li>
                <li><a href="google.com">Project 3</a></li>
            </ul>
            <TestButtons />
        </div>
    )
}