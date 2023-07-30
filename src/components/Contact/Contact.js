import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aquí iría el código para enviar el correo con la API que elijas.
            // Por ejemplo, si usas axios podrías hacer algo así:
            // await axios.post('/api/contact', formState);

            console.log(formState); // Solo para fines de depuración
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
