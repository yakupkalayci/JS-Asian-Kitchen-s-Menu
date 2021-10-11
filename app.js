const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

// Load all menu items
document.addEventListener("DOMContentLoaded", createAllItem);
function createAllItem() {
    menu.forEach((item) => {
        createMenuItem(item);
    });
}

// Select menu items from index.html
const menuItems = document.querySelector("#menu-items");

// Create menu items properly
function createMenuItem(item) {
    let div;
    let img;
    let div2;
    let div3;
    let h4;
    let h4_2;
    let div4;
    div = document.createElement("div");
    div.className = "menu-items col-lg-6 col-sm-12";
    img = document.createElement("img");
    img.src = item.img;
    img.className = "photo";
    img.alt = item.title;
    div.appendChild(img)

    div2 = document.createElement("div");
    div2.className = "menu-info";

    div3 = document.createElement("div");
    div3.className = "menu-title";

    h4 = document.createElement("h4");
    h4.textContent = item.title;

    h4_2 = document.createElement("h4");
    h4_2.className = "price";
    h4_2.textContent = item.price;

    div3.appendChild(h4);
    div3.appendChild(h4_2);
    div2.appendChild(div3);

    div4 = document.createElement("div");
    div4.className = "menu-text";
    div4.textContent = item.desc;

    div2.appendChild(div4);
    div.appendChild(div2);

    menuItems.appendChild(div);
}

// To remove inappropriate menu items when selecting the other category
function removeItems() {
    menuItems.innerHTML = "";
}

// Creating and placing buttons to the page
const btnContainer = document.querySelector(".btn-container");
const allBtn = document.createElement("button");
allBtn.textContent = "All";
const koreaBtn = document.createElement("button");
koreaBtn.textContent = "Korea";
const japanBtn = document.createElement("button");
japanBtn.textContent = "Japan"
const chinaBtn = document.createElement("button");
chinaBtn.textContent = "China";
const buttons = [allBtn, koreaBtn, japanBtn, chinaBtn]

buttons.forEach((button) => {
    button.className = "btn-item btn btn-outline-dark";
    btnContainer.appendChild(button);
    button.addEventListener("click", selectCategory);
})

// To view the proper menu items according to the chosen category
function selectCategory(e) {
    let category = e.target.textContent;
    let selectedMenu = [];

    if (category === "All") {
        selectedMenu = menu;
        removeItems();
        selectedMenu.forEach((item) => createMenuItem(item));
    } else {
        selectedMenu = menu.filter((item) => category === item.category ? true : false);
        removeItems();
        selectedMenu.forEach((item) => createMenuItem(item));
    }
}