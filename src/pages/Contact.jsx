import React from "react";

export default function Contact() {
  // A simple inline style for the custom split background.
  // We use Bootstrap's primary blue color for consistency.
  const sectionStyle = {
    background: 'linear-gradient(to bottom,rgb(29, 44, 67) 50%, #ffffff 50%)'
  };

  return (
    // Main container using Flexbox utilities to center the card
    <div 
    className="d-flex align-items-center justify-content-center min-vh-100" 
    style={sectionStyle}
  >
      {/* Bootstrap Card Component:
        - .card: Base card styling
        - .shadow-lg: A large, pronounced shadow
        - .p-4 or .p-5: Padding inside the card
        - .rounded-4: A larger border-radius for more rounded corners
        - .border-0: Removes the default card border
      */}
      <div className="card shadow-lg p-4 rounded-4 border-0" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Get In Touch</h2>
          <p className="card-subtitle text-center text-muted mb-4">
            We are a team dedicated to delivering excellence. Let's connect!
          </p>
          
          <form>
            {/* Form Group for Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            {/* Form Group for Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
            </div>

            {/* Form Group for Contact Number */}
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact Number</label>
              <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" />
            </div>

            {/* Form Group for Subject */}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required />
            </div>
            
            {/* Full-width submit button */}
            <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
