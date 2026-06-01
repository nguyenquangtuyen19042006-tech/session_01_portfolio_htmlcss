// [FEATURE] Thêm vào giỏ hàng
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}