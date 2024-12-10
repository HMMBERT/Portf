import React, { useState } from 'react';

function EventBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventName: '',
    eventDate: '',
    eventLocation: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Event Booking</h1>
        <p style={styles.subHeading}>Fill out the form to book your event with us.</p>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Event Location</label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              style={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#1e1e1e',
    padding: '40px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: '1.2em',
    marginBottom: '30px',
    color: '#a1a1a1',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '1.1em',
    marginBottom: '8px',
    color: '#e0e0e0',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#2a2a2a',
    color: '#f5f5f5',
    fontSize: '1em',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#2a2a2a',
    color: '#f5f5f5',
    fontSize: '1em',
    height: '150px',
    resize: 'vertical',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    padding: '14px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1.2em',
    transition: 'background-color 0.3s ease',
  },
};

export default EventBooking;
