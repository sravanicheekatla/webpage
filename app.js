const products = [
    {
        id: 1,
        name: "Comfortable and Trendy woolen sweater",
        price: "$19.99",
        description: "100% pure woolen sweater.perfect for winter. trendy fit.",
        image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s37749b31373b40ee/image/i98258e69a0a54644/version/1567308215/image.jpg",
    },
    {
        id: 2,
        name: "SteelSeries H Wireless Gaming Headset and Transmitter",
        price: "$29.99",
        description: "Includes Dolby Headphone, Dolby Digital, and Dolby Pro Logic ,Frequency continuously hops to preempt and circumvent interference Low audio latency for a smooth audio stream.",
        image: "https://th.bing.com/th/id/R.44b7ffb270c5694233e64e3eb5dd5e65?rik=DqpWGP%2bBVLhZbA&pid=ImgRaw&r=0",
    },
    {
        id:3,
        name:"WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price:"$64",
        description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
        image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
        id:4,
        name:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price:"$109",
        description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        id:5,
        name:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price:"$106",
        description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking &amp; Correction) to provide the optimized performance and enhanced reliability.",
        image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
        id:6,
        name:"Mens Casual Premium Slim Fit T-Shirts",
        price:"$22.3",
        description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        id:7,
        name:">Mens Cotton Jacket",
        price:"$55.99",
        description:" great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        id:8,
        name:"Mens Casual Slim Fit",
        price:"$15.99",
        description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
        id:9,
        name:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price:"$56.99",
        description:"The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
        id:10,
        name:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price:"$ 29.95",
        description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
        id:11,
        name:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price:"$ 39.99",
        description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    
];

//display products
function generateProductElements(productsToDisplay) {
    const productContainer = document.querySelector(".products--list");

    productContainer.innerHTML = '';

    productsToDisplay.forEach((product) => {
        const productElement = document.createElement("li");
        productElement.className = 'product card'; 

        productElement.innerHTML = `
            <img class="product--image" src="${product.image}" alt="${product.name}" />
            <div class="product--text">
                <h1 class="product--name">${product.name}</h1>
                <p class="product--description">${product.description}</p>
                <button class="product--buy">Buy Now</button>
                <p class="product--price">${product.price}</p>
            </div>
        `;

        productContainer.appendChild(productElement);
    });

    attachAddToCartListeners();
}

//sort products by price
    function sortProductsByPrice(order) {
        const sortedProducts = [...products].sort((a, b) => {
            const priceA = parseFloat(a.price.replace("$", ""));
            const priceB = parseFloat(b.price.replace("$", ""));
            return order === "asc" ? priceA - priceB : priceB - priceA;
        });

        generateProductElements(sortedProducts); // Re-render sorted products
    }

    document.addEventListener("DOMContentLoaded", () => {
        const sortDropdown = document.getElementById("sort");

    generateProductElements(products);

    sortDropdown.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        sortProductsByPrice(selectedOption);
    });
});

// Cart functionality
const cartItems = [];
const modal = document.getElementById("modalCart");
const cartLink = document.getElementById("cartLink");
const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
const cartDisplay = document.querySelector(".modal-cart-content p");

  
    cartLink.onclick = function () {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
      updateCartDisplay();
    };
  
    closeBtn.onclick = function () {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    };
  

    function attachAddToCartListeners(){
    const addToCartButtons = document.querySelectorAll(".product--buy");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.closest(".product.card");
        const productName = product.querySelector(".product--name").textContent;
        const productPrice = product.querySelector(".product--price").textContent;
  
        cartItems.push({
          name: productName,
          price: productPrice,
        });
  
        displayConfirmation(productName);
        updateCartDisplay();
      });
    });
    }

  
    function updateCartDisplay() {
      if (cartItems.length === 0) {
        cartDisplay.textContent = "Your cart is empty.";
      } else {
        cartDisplay.innerHTML =
          "<ul>" +
          cartItems
            .map((item) => `<li>${item.name} - ${item.price}</li>`)
            .join("") +
          "</ul>";
      }
    }
  
    function displayConfirmation(productName) {
      const confirmation = document.createElement("div");
      confirmation.className = "confirmation-message";
      confirmation.textContent = `${productName} has been added to the cart.`;
      document.body.appendChild(confirmation);
  
      setTimeout(() => {
        confirmation.remove();
      }, 3000);
    }


    //search Functionality
    document.addEventListener("DOMContentLoaded", () => {
        const searchInput = document.querySelector(".navbar--search");
        const productList = document.querySelector(".products--list");
        const products = Array.from(productList.children);

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        products.forEach((product) => {
          const productName = product
            .querySelector(".product--name")
            .textContent.toLowerCase();
          if (productName.includes(query)) {
            product.style.display = "";
          } else {
            product.style.display = "none";
          }
        });
      });
    });