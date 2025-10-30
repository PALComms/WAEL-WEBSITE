import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 📦 Recipients Map
const recipients = {
  contact: "info@wael.com",
  support: "support@yourcompany.com",
  trotter: "Infotrotter@waelng.com",
  demo: "brightawah94@gmail.com",
};

// 🧩 Shared Email Template Wrapper
const createEmailTemplate = (formType, content) => `
  <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.1);">
      <div style="background: #12366B; color: white; padding: 24px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px;">New ${formType} Form Submission</h2>
      </div>
      <div style="padding: 30px;">
        ${content}
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://wael.com" style="display: inline-block; background: #12366B; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
            Visit Wael
          </a>
        </div>
      </div>
      <div style="background: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
        © ${new Date().getFullYear()} Wael. All rights reserved.
      </div>
    </div>
  </div>
`;

// 🧱 --- FORM HANDLERS ---

// DEMO FORM HANDLER
const handleDemoForm = (data) => {
  const servicesList =
    Array.isArray(data.services) && data.services.length > 0
      ? `<ul style="padding-left: 20px; margin-top: 8px; color: #111827;">
          ${data.services.map((s) => `<li>${s}</li>`).join("")}
        </ul>`
      : "<p style='color: #6b7280;'>No services selected</p>";

  const text = `
New Demo Request Form Submission:

Full Name: ${data.fullName}
Company Name: ${data.companyName}
Company Email: ${data.companyEmail}
Sector: ${data.sector}
Services Interested In: ${data.services?.join(", ") || "None"}
  `;

  const html = createEmailTemplate(
    "Demo",
    `
      <p style="color: #374151; font-size: 16px;">You’ve received a new demo request from the website.</p>
      <div style="margin-top: 20px; line-height: 1.6;">
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Company Email:</strong> ${data.companyEmail}</p>
        <p><strong>Sector:</strong> ${data.sector}</p>
        <p><strong>Services Interested In:</strong></p>
        ${servicesList}
      </div>
    `
  );

  return { text, html };
};

// TROTTER FORM HANDLER
const handleTrotterForm = (data) => {
  const text = `
New Trotter Inquiry Form Submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Industry: ${data.industry}
Message: ${data.message}
  `;

  const html = createEmailTemplate(
    "Trotter",
    `
      <p style="color: #374151; font-size: 16px;">You’ve received a new message from the Trotter page.</p>
      <div style="margin-top: 20px; line-height: 1.6;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Industry:</strong> ${data.industry}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; color: #111827;">
          ${data.message?.replace(/\n/g, "<br/>") || ""}
        </div>
      </div>
    `
  );

  return { text, html };
};

// DEFAULT FORM HANDLER (Contact, Support, etc.)
const handleDefaultForm = (formType, data) => {
  const servicesList =
    Array.isArray(data.services) && data.services.length > 0
      ? `<ul style="padding-left: 20px; margin-top: 8px; color: #111827;">
          ${data.services.map((s) => `<li>${s}</li>`).join("")}
        </ul>`
      : "<p style='color: #6b7280;'>No services selected</p>";

  const text = `
New Demo Request Form Submission:

Full Name: ${data.fullName}
Company Name: ${data.companyName}
Company Email: ${data.companyEmail}
Sector: ${data.sector}
Services Interested In: ${data.services?.join(", ") || "None"}
  `;


  const html = createEmailTemplate(
    formType,
    `
     <p style="color: #374151; font-size: 16px;">You’ve received a new demo request from the website.</p>
      <div style="margin-top: 20px; line-height: 1.6;">
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Company Email:</strong> ${data.companyEmail}</p>
        <p><strong>Sector:</strong> ${data.sector}</p>
        <p><strong>Services Interested In:</strong></p>
        ${servicesList}
      </div>
    `
  );

  return { text, html };
};

// ✉️ MAIN SEND FUNCTION
export async function sendMail(formType, formData) {
  try {
    const to = recipients[formType] || "info@yourcompany.com";
    let mailContent;

    // Choose handler based on formType
    switch (formType) {
      case "demo":
        mailContent = handleDemoForm(formData.formData);
        break;
      case "trotter":
        mailContent = handleTrotterForm(formData);
        break;
      default:
        mailContent = handleDefaultForm(formType, formData);
    }

    // Send Email
    const response = await resend.emails.send({
      from: "Wael <onboarding@resend.dev>",
      to,
      subject: `New ${formType} Form Submission`,
      text: mailContent.text,
      html: mailContent.html,
    });

    return response;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}
