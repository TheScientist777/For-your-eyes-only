let cartCount = 0;

function addToCart(itemNumber) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function proceedToCheckout() {
  // Redirect to "checkout.html"
  window.location.href = "checkout.html";
}
