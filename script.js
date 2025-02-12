document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ajouter-panier');
    const totalDisplays = document.querySelectorAll('.total');

    //  evenement du bouton ajouter au panier
    
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.produit, .produit2');
        const price = parseFloat(productElement.dataset.prix);
        const quantityElement = productElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        
        quantity += 1;
        quantityElement.textContent = quantity;
  
        updateTotal();
      });
    });
  
    const plusIcons = document.querySelectorAll('.fa-plus-circle');
    const minusIcons = document.querySelectorAll('.fa-minus-circle');
    
    // /evenement du bouton plus

    plusIcons.forEach(icon => {
      icon.addEventListener('click', (event) => {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity += 1;
        quantityElement.textContent = quantity;
        updateTotal();
      });
    });
    // evenement du bouton moins
    minusIcons.forEach(icon => {
      icon.addEventListener('click', (event) => {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity -= 1;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      });
    });
  
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.produit, .produit2').forEach(product => {
        const price = parseFloat(product.dataset.prix);
        const quantity = parseInt(product.querySelector('.quantity').textContent);
        total += price * quantity;
      });
  
      totalDisplays.forEach(display => {
        display.textContent = `${total.toFixed(2)} €`;
      });
    }
  });