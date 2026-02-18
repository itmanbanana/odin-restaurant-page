const menuDiv = document.createElement("div") as HTMLDivElement;

const menuHeadingDiv = document.createElement("div") as HTMLDivElement;
menuHeadingDiv.innerHTML = `
    <div class="heading">Our Menu</div>
    <p class="description">Fresh ingredients. Thoughtful preparation. Unforgettable flavour.</p>
`;

const menuStartersDiv = document.createElement("div") as HTMLDivElement;
menuStartersDiv.innerHTML = `
    <div class="subheading">🥗 Starters</div>
    <div class="menu-item">
        <div class="menu-item-name">House Garden Salad - $9</div>
        <div class="menu-item-description">Mixed greens, cherry tomatoes, cucumbers, 
        red onions, house vinaigrette.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Crispy Calamari - $13</div>
        <div class="menu-item-description">Lightly breaded calamari, lemon aioli, 
        marinara sauce.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Spinach & Artichoke Dip - $11</div>
        <div class="menu-item-description">Creamy blend of cheeses, served warm with toasted 
        baguette slices.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Soup of the Day - $7</div>
        <div class="menu-item-description">Chef’s daily seasonal creation. Ask your server for 
        today’s selection.</div>
    </div>
`;

const menuMainsDiv = document.createElement("div") as HTMLDivElement;
menuMainsDiv.innerHTML = `
    <div class="subheading">🍝 Main Courses</div>
    <div class="menu-item">
        <div class="menu-item-name">Grilled Lemon Herb Chicken - $19</div>
        <div class="menu-item-description">Marinated chicken breast, roasted vegetables, garlic mashed potatoes.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Classic Cheeseburger - $16</div>
        <div class="menu-item-description">Angus beef patty, cheddar cheese, lettuce, tomato, brioche bun. Served with fries.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Pan-Seared Salmon - $23</div>
        <div class="menu-item-description">Fresh salmon fillet, wild rice, sautéed asparagus, dill cream sauce.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Vegetable Primavera - $17</div>
        <div class="menu-item-description">Seasonal vegetables tossed with penne pasta in a light garlic olive oil sauce.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Steak Frites - $25</div>
        <div class="menu-item-description">Grilled sirloin, herb butter, crispy fries.</div>
    </div>
`;

const menuBreadsDiv = document.createElement("div") as HTMLDivElement;
menuBreadsDiv.innerHTML = `
    <div class="subheading">🍕 From the Oven</div>
    <div class="menu-item">
        <div class="menu-item-name">Margherita Pizza - $15</div>
        <div class="menu-item-description">Fresh mozzarella, basil, house tomato sauce.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">BBQ Chicken Pizza - $17</div>
        <div class="menu-item-description">Grilled chicken, red onions, mozzarella, tangy BBQ sauce.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Roasted Veggie Flatbread - $14</div>
        <div class="menu-item-description">Zucchini, bell peppers, red onions, feta cheese.</div>
    </div>
`;

const menuDessertsDiv = document.createElement("div") as HTMLDivElement;
menuDessertsDiv.innerHTML = `
    <div class="subheading">🍰 Desserts</div>
    <div class="menu-item">
        <div class="menu-item-name">Chocolate Lava Cake - $9</div>
        <div class="menu-item-description">Warm chocolate cake with a molten center, served with vanilla ice cream.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Classic Cheesecake - $8</div>
        <div class="menu-item-description">Creamy cheesecake with a graham cracker crust and berry compote.</div>
    </div>
    <div class="menu-item">
        <div class="menu-item-name">Tiramisu - $8</div>
        <div class="menu-item-description">Espresso-soaked ladyfingers layered with mascarpone cream.</div>
    </div>
`;

const menuDrinksDiv = document.createElement("div") as HTMLDivElement;
menuDrinksDiv.innerHTML = `
    <div class="subheading">☕ Beverages</div>
    <div class="menu-item">
        <div class="menu-item-name">Freshly Brewed Coffee - $3.50</div>
        <div class="menu-item-name">Assorted Teas - $3.50</div>
        <div class="menu-item-name">Sparkling Water - $3</div>
        <div class="menu-item-name">Soft Drinks - $4</div>
        <div class="menu-item-name">House Wine (Red/White) - $9 (glass) / $30 (bottle)</div>
        <div class="menu-item-name">Local Craft Beer - $8</div>
    </div>
`;

const menuAllergyDiv = document.createElement("div") as HTMLDivElement;
menuAllergyDiv.innerHTML = `
<br>
<p class="description"><i>Please inform your server of any allergies or dietary restrictions. 
Vegetarian and gluten-free options available upon request.</i></p>
`;

menuDiv.appendChild(menuHeadingDiv);
menuDiv.appendChild(menuStartersDiv);
menuDiv.appendChild(menuMainsDiv);
menuDiv.appendChild(menuBreadsDiv);
menuDiv.appendChild(menuDessertsDiv);
menuDiv.appendChild(menuDrinksDiv);
menuDiv.appendChild(menuAllergyDiv);

export { menuDiv }
