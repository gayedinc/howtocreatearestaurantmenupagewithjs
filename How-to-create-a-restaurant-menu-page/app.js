//Items - Menü Verisi (menu)
const menu = [
    {
        id: 1,
        title: "Turkish Breakfast",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `Chocolate, tomato paste, honey, clotted cream, mixed fried foods, hot plate, fried eggs, cheese platter, black olives, green olives, jam, butter, pastry basket, french fries, seasonal fruit (4 free teas).`,
    },
    {
        id: 2,
        title: "Pancake Board",
        category: "breakfast",
        price: 17.00,
        img: "./images/item-2.jpeg",
        desc: `12 pieces of pancake, blueberries, strawberries, chocolate, honey, eggs, sausage, milk (2 cups of coffee free).`,
    },
    {
        id: 3,
        title: "Single-serving breakfast",
        category: "breakfast",
        price: 13.00,
        img: "./images/item-3.jpeg",
        desc: `Egg, seasonal vegetables and fruits, cheese, green olives, black olives, smoked turkey, walnuts (2 cups of tea free).`,
    },
    {
        id: 4,
        title: "Sezar Salad",
        category: "lunch",
        price: 13.99,
        img: "./images/item-4.jpeg",
        desc: `Grilled chicken, iceberg lettuce, tomatoes, Caesar dressing, pickled cucumber, croutons, accompanied by Parmesan cheese.`,
    },
    {
        id: 5,
        title: "Chicken & Avocado Wrap",
        category: "lunch",
        price: 10.99,
        img: "./images/item-5.jpeg",
        desc: `Chicken, avocado, snow pea sprouts, semi-dried tomatoes`,
    },
    {
        id: 6,
        title: "Spagetti Bolognese",
        category: "lunch",
        price: 20.99,
        img: "./images/item-6.jpeg",
        desc: `Bolognese sauce and Parmesan-prepared spaghetti.`,
    },
    {
        id: 7,
        title: "Beef Taco",
        category: "lunch",
        price: 22.99,
        img: "./images/item-7.jpeg",
        desc: `Julienne-cut beef tenderloin, colorful bell peppers, sweet chili sauce, lettuce, tomatoes, red onion, sour cream, French fries, and relish sauce.`,
    },
    {
        id: 8,
        title: "Cheese Burger",
        category: "dinner",
        price: 23.99,
        img: "./images/item-8.jpeg",
        desc: `Pure beef burger, caramelized onions, cheddar cheese, with potatoes and relish sauce.`,
    },
    {
        id: 9,
        title: "Chicken Quesadilla",
        category: "dinner",
        price: 20.99,
        img: "./images/item-9.jpeg",
        desc: `Shredded chicken, mozzarella cheese, jalapeno peppers, colorful bell peppers, Mediterranean greens, potatoes, tortilla bread, onions, with special sauce.`,
    },
    {
        id: 10,
        title: "Sirloin Steak",
        category: "dinner",
        price: 25.99,
        img: "./images/item-10.jpeg",
        desc: `Grilled sirloin marinated with fresh herbs, served with boiled vegetables, lemon-flavored orzo, and tortilla.`,
    },
    {
        id: 11,
        title: "Easy Herby Lemon Chicken Skewers",
        category: "dinner",
        price: 23.99,
        img: "./images/item-11.jpeg",
        desc: `Chicken breast, cut into chunks, olive oil, lemon juice, garlic (minced), fresh herbs (such as rosemary, thyme, oregano), salt and pepper, wooden skewers, soaked in water.`,
    },
    {
        id: 12,
        title: "Café Mocha Protein Shake",
        category: "shakes",
        price: 16.99,
        img: "./images/item-12.jpeg",
        desc: `Protein powder, coffee (brewed and cooled), Chocolate-flavored almond milk, banana, ıce cubes, unsweetened cocoa powder, sweetener of choice (optional), whipped cream (optional).`,
    },
    {
        id: 13,
        title: "Oreo Milkshake",
        category: "shakes",
        price: 15.99,
        img: "./images/item-13.jpeg",
        desc: `Vanilla ice cream, milk,  oreo cookies, whipped cream, chocolate syrup, vanilla extract, ice cubes.`,
    },
    {
        id: 14,
        title: "Strawberry Protein Shake",
        category: "shakes",
        price: 15.99,
        img: "./images/item-14.jpeg",
        desc: `Strawberries, vanilla protein powder, milk, turkish yogurt, honey, ice cubes, heavy cream, vanilla extract, sweetener (optional).`,
    },
];

// HTML Element Seçimi
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//Load Items -Sayfa Yüklendiğinde Menüyü Gösterme
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// Menü Öğelerini Gösterme (displayMenuItems)
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        /* console.log(item); */

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu
}

// Kategori Filtreleme Düğmelerini Gösterme (displayMenuButtons)
function displayMenuButtons (){
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    },
        ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" 
        data-id="${category}">
        ${category}
        </button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
//Filter Items - Kategoriye Göre Menüyü Filtreleme
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}





/* map Fonksiyonu:
map fonksiyonu, bir dizi üzerinde döngü yapmaya benzer bir şekilde çalışır. 
Ancak, bu fonksiyon her döngü öğesi üzerinde belirli bir işlemi uygular ve sonuçları yeni bir dizi olarak döndürür.
map fonksiyonu, her bir öğe için belirtilen işlemleri uygular ve bu işlemlerin sonuçlarını yeni bir dizi olarak döndürür. 
Örneğin, yukarıdaki kod örneğinde, menü öğelerinin her biri için bir HTML bloğu oluşturuluyor ve bu HTML blokları displayMenu adlı bir diziye ekleniyor.

join Fonksiyonu:
join fonksiyonu, bir diziyi belirli bir ayraçla birleştirip tek bir dize haline getirir.
Bu fonksiyon, özellikle bir dizi içindeki öğeleri birleştirip tek bir metin dizesi elde etmek istediğinizde kullanışlıdır. 
Örneğin, yukarıdaki kod örneğinde, displayMenu dizisi join fonksiyonu kullanılarak birleştiriliyor ve ardından bu birleştirilmiş metin, .section-center elementinin innerHTML özelliğine atanarak sayfada görüntüleniyor. */

/* reduce Fonksiyonu:
reduce fonksiyonu, bir dizi veya liste üzerinde bir işlem gerçekleştirmek için kullanılan bir dizi metodu (method) veya yüksek düzey bir fonksiyondur. 
Bu fonksiyon, diziyi tek bir değere (bir akümülatör) indirger.

includes Metodu:
includes metodu, bir dizinin belirli bir elemanı içerip içermediğini kontrol eder. 
Bu metodun dönüş değeri true veya false'dir.

push Metodu:
push metodu, bir dizinin sonuna bir veya daha fazla eleman eklemek için kullanılır. 
Bu metot, dizinin uzunluğunu günceller. */