import React from "react";

export default function GuestCard({ guestName = "Bapak / Ibu / Saudara/i" }) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div
        className="rounded-xl px-5 py-10 text-center shadow-sm"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #eee",
          opacity: 0.6,
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#888",
            marginBottom: "8px",
            marginTop: "8px",
          }}
        >
          KEPADA YTH.
        </p>

        <div
          style={{
            width: "30px",
            height: "1px",
            backgroundColor: "#d4b08c",
            margin: "0 auto 10px",
          }}
        />

        <h2
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#222",
            lineHeight: "1.4",
          }}
        >
          {guestName}
        </h2>
        {/* 
        <p
          style={{
            marginTop: "10px",
            fontSize: "11px",
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir.
        </p> */}

        <div
          style={{
            marginTop: "12px",
            borderTop: "1px solid #eee",
            paddingTop: "8px",
          }}
        >
          <p
            style={{
              fontSize: "9px",
              color: "#999",
              fontStyle: "italic",
              lineHeight: "1.4",
              marginBottom: "8px",
            }}
          >
            Mohon maaf apabila terdapat kesalahan dalam penulisan nama, gelar,
            maupun penyebutan pada undangan ini.
          </p>
        </div>
      </div>
    </div>
  );
}
