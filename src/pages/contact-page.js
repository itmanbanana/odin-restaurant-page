const contactDiv = document.createElement("div");
const contactHeadingDiv = document.createElement("div");
contactHeadingDiv.innerHTML = `
    <div class="heading">Contact Us</div>
    <p class="description">
    We’d love to hear from you! Whether you’re making a reservation, 
    planning a private event, or just have a question about our menu, 
    our team is here to help.
    </p>
`;
const contactPhoneDiv = document.createElement("div");
contactPhoneDiv.innerHTML = `
    <div class="subheading">📞 Call Us</div>
    <p>Phone: <b>(555) 123-4567</b></p>
`;
const contactEmailDiv = document.createElement("div");
contactEmailDiv.innerHTML = `
    <div class="subheading">📧 Email Us</div>
    <p>Email: <b>info@savoryhaven.com</b></p>
    <br>
    <p class="description">We aim to respond to all inquiries within 24-48 hours.</p>
`;
contactDiv.appendChild(contactHeadingDiv);
contactDiv.appendChild(contactPhoneDiv);
contactDiv.appendChild(contactEmailDiv);
export { contactDiv };
//# sourceMappingURL=contact-page.js.map