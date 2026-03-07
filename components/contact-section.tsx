"use client";

import React from "react";
import NeuralBackground from "@/components/flow-field-background";
import { Mail, MapPin } from "lucide-react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
        width: "100%",
        minHeight: "100vh",
        background: "black",
      }}
    >
      {/* Background canvas — grid overlap */}
      <div
        aria-hidden="true"
        style={{
          gridRow: 1,
          gridColumn: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <NeuralBackground
          color="#6366f1"
          particleCount={400}
          speed={0.8}
          trailOpacity={0.12}
        />
      </div>

      {/* Content — same grid cell, paints on top due to DOM order */}
      <div
        style={{
          gridRow: 1,
          gridColumn: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#818cf8",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.75rem",
          }}
        >
          Get In Touch
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Let&apos;s build something together.
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "32rem",
            marginBottom: "2rem",
          }}
        >
          Whether it&apos;s a collaboration, a project idea, or just a conversation about tech — I&apos;m always open to connecting.
        </p>

        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#cbd5e1", fontSize: "0.95rem" }}>
            <Mail style={{ width: "1.15rem", height: "1.15rem", color: "#818cf8" }} />
            aditya@worldaditya.dev
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#cbd5e1", fontSize: "0.95rem" }}>
            <MapPin style={{ width: "1.15rem", height: "1.15rem", color: "#818cf8" }} />
            India
          </div>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://github.com/dialga-cmd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.4rem",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
            className="hover:!bg-white/20"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://wa.me/917717722747"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.4rem",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
            className="hover:!bg-white/20"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a
            href="https://discord.com/users/dialga_cmd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.4rem",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
            className="hover:!bg-white/20"
          >
            <DiscordIcon />
            Discord
          </a>
          <a
            href="https://instagram.com/adi.tya.001"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.4rem",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
            className="hover:!bg-white/20"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
