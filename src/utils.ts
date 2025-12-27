import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikkatechx@gmail.com", 
    pass: "ephi qazp vkpp fiko",
  },
});
export async function sendWaitlistMail(toEmail: string, fullName: string) {
  const mailOptions = {
    from: '"Nikka tech mail" <nikkatechx@gmail.com>',
    to: toEmail,
    subject: "Welcome to AyoNaire",
    html: `
      <div style="
        max-width: 420px;
        margin: 40px auto;
        padding: 32px 28px;
        background-color: #ffffff;
        border-radius: 14px;
        font-family: 'Segoe UI', Arial, sans-serif;
        text-align: center;
        border: 1px solid #f3e7c4;
        box-shadow: 0 8px 25px rgba(0,0,0,0.08);
      ">

        <h1 style="
          color: #d4af37;
          font-size: 26px;
          margin-bottom: 6px;
          font-weight: 700;
        ">
          AyoNaire
        </h1>

        <p style="
          color: #999;
          font-size: 13px;
          margin-bottom: 26px;
          letter-spacing: 0.5px;
        ">
          #1 TECH COMMUNITY
        </p>

        <p style="
          color: #333;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 18px;
        ">
          Hi <strong>${fullName}</strong>, 👋
        </p>

        <p style="
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 22px;
        ">
          You’ve been successfully added to the <strong>AyoNaire waitlist</strong>.
          <br><br>
          We’re building something solid for the tech community — and you’re early.
        </p>

        <p style="
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 26px;
        ">
          If anything happens, updates roll out, or access opens —  
          <strong>you’ll be the first to know.</strong>
        </p>

        <div style="
          margin-top: 30px;
          font-size: 13px;
          color: #aaa;
        ">
          Stay sharp. Stay ready. 🚀
        </div>

        <hr style="
          border: none;
          border-top: 1px solid #f1e6c9;
          margin: 28px 0;
        ">

        <p style="
          font-size: 12px;
          color: #aaa;
        ">
          © ${new Date().getFullYear()} AyoNaire
        </p>

      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('success')
  } catch (error) {
    console.error(error);
  }
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


