let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(productName + " wurde zum Warenkorb hinzugefügt!");
}

function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}
updateCartCount();

function liveSearch() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let products = document.querySelectorAll('.product');
    products.forEach(p => {
        const name = p.querySelector('h3').innerText.toLowerCase();
        p.style.display = name.includes(input) ? "block" : "none";
    });
}

function filterProducts() {
    let price = document.getElementById('priceFilter').value;
    let rating = document.getElementById('ratingFilter').value;
    let products = document.querySelectorAll('.product');
    products.forEach(p => {
        let pPrice = parseFloat(p.querySelector('.price').innerText.replace('€', ''));
        let stars = p.querySelector('.rating').innerText.replace(/☆/g, '').length;
        let show = true;
        if (price === "under10" && pPrice >= 10) show = false;
        if (price === "under20" && pPrice >= 20) show = false;
        if (price === "over20" && pPrice <= 20) show = false;
        if (rating === "4" && stars < 4) show = false;
        if (rating === "5" && stars < 5) show = false;
        p.style.display = show ? "block" : "none";
    });
}