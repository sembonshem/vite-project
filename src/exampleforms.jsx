import React from 'react';
export default function ExampleForm(){
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation here if needed
        // For example, check if all fields are filled
        if (formData.name && formData.email && formData.message) {
            // You can add further logic here, like sending the form data to a server
            // For now, we'll just log the form data to the console
            console.log(formData);
        } else {
            // Show an error message or handle the validation error
            alert('Please fill in all fields.');
        }
        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Example controlled Form</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Message:
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );

};