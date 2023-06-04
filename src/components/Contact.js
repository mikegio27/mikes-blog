import { Form } from "react-router-dom";

export default function Contact() {

    return (
        <Form>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name"></input>
            </div>
            <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="
                Enter email"></input>
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    )

}