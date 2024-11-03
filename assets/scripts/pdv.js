document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  updateTotalQuantity(); // Chama aqui para garantir que o DOM esteja carregado
});

function saveProduct() {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  const formIndex = document.getElementById("productForm").dataset.index;
  let products = JSON.parse(localStorage.getItem("products")) || [];

  if (formIndex) {
    // Atualizar o produto existente
    products[formIndex] = {
      name,
      price,
      quantity,
      description,
      category,
    };
    delete document.getElementById("productForm").dataset.index;
  } else {
    // Adicionar um novo produto
    products.push({ name, price, quantity, description, category });
  }

  // Salvar no localStorage e atualizar a tabela
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();

  // Limpar o formulário e fechar o modal
  document.getElementById("productForm").reset();
  updateTotalQuantity(); // Atualiza a quantidade total após adicionar ou editar
}

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productTableBody = document.getElementById("productTableBody");
  productTableBody.innerHTML = "";

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
              <td>P-00${index + 1}</td>
              <td>${product.name}</td>
              <td>R$ ${product.price.toFixed(2).replace(".", ",")}</td>
              <td>${product.quantity}</td>
              <td style="max-width: 200px; overflow-x: auto;">${
                product.description
              }</td>
              <td>${product.category}</td>
              <td>
                  <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Editar</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Excluir</button>
              </td>
          `;

    productTableBody.appendChild(row);
  });
}

function editProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  if (!product) return;

  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("quantity").value = product.quantity;
  document.getElementById("description").value = product.description;
  document.getElementById("category").value = product.category;

  document.getElementById("productForm").dataset.index = index;
  const productModal = new bootstrap.Modal(
    document.getElementById("productModal")
  );
  productModal.show();
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
  updateTotalQuantity(); // Atualiza a quantidade total após excluir
}
// Definição da função updateTotalQuantity
function updateTotalQuantity() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Calcule o total em valor monetário
  const totalValue = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  console.log(totalValue);
  const totalQuantityElement = document.getElementById("totalQuantity");

  if (totalQuantityElement) {
    totalQuantityElement.innerText =
      "R$ " + totalValue.toFixed(2).replace(".", ","); // Atualiza o valor com duas casas decimais
  } else {
    console.error("Elemento com ID 'totalQuantity' não encontrado.");
  }
}
