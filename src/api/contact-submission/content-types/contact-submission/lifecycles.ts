export default {
  async afterCreate(event) {
    const { result } = event;
    await strapi.plugins["email"].services.email.send({
      to: "post@redmoon.no",
      subject: `Ny henvendelse fra ${result.name}`,
      html: `
        <h2>Ny kontaktforespørsel – RedMoon Production</h2>
        <p><strong>Navn:</strong> ${result.name}</p>
        <p><strong>E-post:</strong> ${result.email}</p>
        <p><strong>Telefon:</strong> ${result.phone || "–"}</p>
        <p><strong>Tjeneste:</strong> ${result.service || "–"}</p>
        <p><strong>Dato:</strong> ${result.date || "–"}</p>
        <p><strong>Melding:</strong><br>${result.message || "–"}</p>
      `,
    });
  },
};
