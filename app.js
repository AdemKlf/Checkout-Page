const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //set items to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //set items to sessionStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
});
