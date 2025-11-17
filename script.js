// External JavaScript for Jewellery Shop Website

// Simple interaction: Show alert when "View Details" buttons are clicked
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Thank you for viewing this jewellery item! ✨");
        });
    });
});
