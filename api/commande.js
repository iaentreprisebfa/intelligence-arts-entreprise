// Fonction serverless Vercel : envoie la commande par e-mail (SMTP).
// Variables d'environnement à définir dans Vercel : SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO
const nodemailer = require("nodemailer");
const OK = /\.(pdf|jpe?g|png|svg|ai|eps)$/i;
const esc = s => String(s ?? "").replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS"); res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });
  const d = req.body || {};
  if (d.website) return res.status(200).json({ ref: "IAE-OK" }); // antispam (honeypot)
  if (!d.nom || !d.tel || !d.email || !/^\S+@\S+\.\S+$/.test(d.email)) return res.status(400).json({ error: "Champs obligatoires manquants" });
  const fichiers = Array.isArray(d.fichiers) ? d.fichiers.slice(0, 10) : [];
  let total = 0;
  for (const f of fichiers) {
    if (!OK.test(f.nom || "")) return res.status(400).json({ error: "Format de fichier refusé" });
    total += (f.data || "").length * 0.75;
  }
  if (total > 3.6e6) return res.status(413).json({ error: "Fichiers trop volumineux" });
  const ref = "IAE-" + new Date().toISOString().slice(2, 10).replace(/-/g, "") + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  const rows = Object.entries(d).filter(([k, v]) => k !== "fichiers" && k !== "website" && v).map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join("");
  try {
    const t = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: +process.env.SMTP_PORT || 465, secure: (+process.env.SMTP_PORT || 465) === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
    await t.sendMail({
      from: `"Site IAE" <${process.env.SMTP_USER}>`, to: process.env.MAIL_TO, replyTo: d.email,
      subject: `Nouvelle commande ${ref} — ${d.type || "Contact"}`,
      html: `<h2>Commande ${ref}</h2><table cellpadding="6" border="1" style="border-collapse:collapse">${rows}</table>`,
      attachments: fichiers.map(f => ({ filename: f.nom.replace(/[^\w.\- ]/g, "_"), content: Buffer.from(f.data, "base64") }))
    });
    res.status(200).json({ ref });
  } catch (e) { console.error(e); res.status(500).json({ error: "Envoi impossible" }); }
};
