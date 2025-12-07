"use server";

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // ---- OPTIONAL: your existing email sending logic ----
  // const { data, error } = await resend.emails.send({
  //   from: "Portfolio Contact <onboarding@resend.dev>",
  //   to: "youremail@gmail.com",
  //   subject: "New Contact Form Message",
  //   text: `From: ${senderEmail}\n\nMessage:\n${message}`
  // });

  // if (error) {
  //   return { error: "Failed to send email." };
  // }

  // ---- SEND DATA TO GOOGLE SHEETS ----
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbz7wHI94h3k7WcJSmpQ8lOTeivNAIyuFDPoTUf7kiczinedMVrIQGN8PEmZzZHRF5PoEA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: senderEmail,
          message: message,
        }),
      }
    );
  } catch (err) {
    return { error: "Failed to save to Google Sheet." };
  }

  return { data: "ok" };
}
