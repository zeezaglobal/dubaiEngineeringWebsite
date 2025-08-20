import React from "react";

export default function About() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 50%), url('/src/assets/port.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column", // stack title and text vertically
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "15vh", // move content down
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        About Us
      </h1>
      <p
        style={{
          color: "rgba(211, 211, 211, 0.9)",
          fontSize: "1rem",
          maxWidth: "800px",
          lineHeight: "1.6",
          padding: "0 1rem",
        }}
      >
        We specialize in designing and manufacturing custom machinery for the
        piping industry and other industrial sectors. Using advanced tools like
        SolidWorks and our deep engineering expertise, we deliver innovative,
        efficient, and durable solutions tailored to our clients’ unique
        requirements.
      </p>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "2rem",
          maxWidth: "800px",
          lineHeight: "1.6",
          padding: "0 1rem",
        }}
      >
       contact@solidcoreengineering.com
      </p>
    </div>
  );
}
