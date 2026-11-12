const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter kategori produk
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    productCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Tombol pesan produk langsung membuka WhatsApp dengan pesan otomatis
const phoneNumber = "6281316705180";
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Halo SpunBrand, saya tertarik dengan ${product}. Boleh minta informasi harga dan detail pemesanannya?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});

// Form kontak dirangkai menjadi pesan WhatsApp
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const product = document.getElementById("customerProduct").value;
  const messageText = document.getElementById("customerMessage").value.trim();

  if (!name || !messageText) {
    alert("Mohon lengkapi nama dan kebutuhan pesanan terlebih dahulu.");
    return;
  }

  const message = `Halo SpunBrand, saya ${name}.%0AProduk: ${product}.%0AKebutuhan: ${messageText}`;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
