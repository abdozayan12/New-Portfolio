import React from "react";

const Contact = () => {
    return (
        <div>
        <div>
        <h1>Contact</h1>
        <p>Send us a message!</p>
        </div>
        <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Message:
                <textarea name="message" />
            </label>
            <button type="submit">Send</button>
        </form>
        </div>
        </div>
    );
}

export default Contact;