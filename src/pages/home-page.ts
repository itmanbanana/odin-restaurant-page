import logo from "../images/logo.png";
const homeDiv = document.createElement("div") as HTMLDivElement;

const homeHeadingDiv = document.createElement("div") as HTMLDivElement;
homeHeadingDiv.innerHTML = `
    <p class="description">
    At Savory Haven, we bring people together over fresh ingredients, bold flavors, 
    and warm hospitality. Whether you're joining us for a casual lunch, a cozy dinner, 
    or a weekend celebration, our menu is crafted to make every visit memorable.
    </p>
`;

const myLogo = new Image();
myLogo.src = logo;

homeDiv.appendChild(myLogo);

const homeAboutDiv = document.createElement("div") as HTMLDivElement;
homeAboutDiv.innerHTML = `
    <div class="subheading">About Us</div>
    <p class="description">
    We’re a neighborhood restaurant focused on seasonal dishes, locally sourced 
    produce, and house-made specialties. From comforting classics to modern favorites, 
    there’s something for everyone at the table.
    </p>
`;

const homeHoursDiv = document.createElement("div") as HTMLDivElement;
homeHoursDiv.innerHTML = `
    <div class="subheading">Business Hours</div>
    <p>
    <b>Monday - Thursday:</b> 11:00 AM - 9:00 PM
    </p>
    <p>
    <b>Friday:</b> 11:00 AM - 10:00 PM
    </p>
    <p>
    <b>Saturday:</b> 10:00 AM - 10:00 PM
    </p>
    <p>
    <b>Sunday:</b> 10:00 AM - 8:00 PM
    </p>
    <br>
    <p class="description">Brunch served Saturday & Sunday from 10:00 AM - 2:00 PM</p>
`;

const homeLocationDiv = document.createElement("div") as HTMLDivElement;
homeLocationDiv.innerHTML = `
    <div class="subheading">Location</div>
    <p>123 Maple Street</p>
    <p>Downtown District</p>
    <p>Springfield, ST 12345</p>
    <br>
    <p class="description">Convenient street parking available. We look forward to welcoming you soon!</p>
`;

homeDiv.appendChild(homeHeadingDiv);
homeDiv.appendChild(homeAboutDiv);
homeDiv.appendChild(homeHoursDiv);
homeDiv.appendChild(homeLocationDiv);

export { homeDiv }