import nodemailer from "nodemailer";

// Gmail SMTP. SMTP_PASS must be a 16-character Google "app password", not the
// account password — generate one at Google Account > Security > App passwords
// (requires 2-Step Verification to be enabled on the account).
//
// Built on first use rather than at import time: ESM hoists imports, so this
// module is evaluated before index.js calls dotenv.config() and process.env
// would still be empty here.
let transporter;
const getTransporter = () => {
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

// Pure, so it can be checked without sending anything.
export const buildBookingEmail = ({ name, email, service, notes }) => {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Service", service],
    ["Notes", notes || "(none)"],
  ];

  return {
    subject: `New booking request: ${service} — ${name}`,
    // Replying in the mail client goes straight to the person who submitted.
    replyTo: `${name} <${email}>`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `<h2>New booking request</h2><table cellpadding="6">${rows
      .map(
        ([label, value]) =>
          `<tr><td><strong>${label}</strong></td><td>${escapeHtml(
            value,
          ).replaceAll("\n", "<br>")}</td></tr>`,
      )
      .join("")}</table>`,
  };
};

export const sendBookingEmail = async (fields) => {
  const { SMTP_USER, SMTP_PASS, BOOKING_TO_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !BOOKING_TO_EMAIL) {
    throw new Error(
      "Mail is not configured: SMTP_USER, SMTP_PASS and BOOKING_TO_EMAIL must all be set in backend/.env",
    );
  }

  const { subject, replyTo, text, html } = buildBookingEmail(fields);

  return getTransporter().sendMail({
    // Gmail rewrites `from` to the authenticated account anyway, so send as
    // the account and put the submitter in replyTo.
    from: `Career Studio 101 <${SMTP_USER}>`,
    to: BOOKING_TO_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });
};
