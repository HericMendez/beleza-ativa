// Dados Mockados
const receivables = [
  { client: "João Silva", amount: 250, date: "2024-10-20", status: "Pendente" },
  { client: "Maria Oliveira", amount: 180, date: "2024-10-18", status: "Pago" },
  {
    client: "Carlos Lima",
    amount: 350,
    date: "2024-10-15",
    status: "Pendente",
  },
  { client: "Ana Souza", amount: 150, date: "2024-10-14", status: "Pago" },
];

const inactiveCustomers = [
  { client: "Roberto Alves", lastPurchase: "2023-09-15" },
  { client: "Beatriz Rocha", lastPurchase: "2023-08-10" },
  { client: "Felipe Martins", lastPurchase: "2023-07-05" },
];

// Inserir Contas a Receber na Tabela
const receivableTable = document.getElementById("receivableTable");
receivables.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item.client}</td><td>R$ ${item.amount.toFixed(
    2
  )}</td><td>${item.date}</td><td>${item.status}</td>`;
  receivableTable.appendChild(row);
});

// Inserir Clientes Inativos na Tabela
const inactiveCustomersTable = document.getElementById(
  "inactiveCustomersTable"
);
inactiveCustomers.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item.client}</td><td>${item.lastPurchase}</td>`;
  inactiveCustomersTable.appendChild(row);
});

// Gráfico de Vendas Mensais (Mockado)
const salesCtx = document.getElementById("salesChart").getContext("2d");
new Chart(salesCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
    ],
    datasets: [
      {
        label: "Vendas (R$)",
        data: [500, 800, 600, 1200, 900, 700, 1100, 1400, 1300, 1600],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});

// Gráfico de Produtos Mais Vendidos (Mockado)
const productsCtx = document.getElementById("productsChart").getContext("2d");
new Chart(productsCtx, {
  type: "bar",
  data: {
    labels: ["Produto A", "Produto B", "Produto C", "Produto D"],
    datasets: [
      {
        label: "Vendas",
        data: [300, 450, 200, 500],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});
