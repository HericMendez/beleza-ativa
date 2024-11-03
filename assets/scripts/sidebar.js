const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
  console.log($wrapper.classList.contains('toggled'));
 
});


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login");
  const sidebarBrand = document.querySelector(".sidebar-brand");
  const loginPrompt = document.getElementById("login-prompt"); // Correção: busca pelo ID

  // Função para atualizar a interface
  function updateUI() {
    const storedName = localStorage.getItem("username");
    console.log(storedName);

    if (storedName) {
      // Exibe a saudação e o botão de sair
      sidebarBrand.innerHTML = `
      <div class="d-flex flex-row align-items-center"
      >    <i class="fa fa-user-circle-o"></i>
        <p>Bem-vindo, <span id="username-display">${storedName}</span><br/><a href="#" class="text-primary" id="logout">Sair</a></div></p>

      </div>
    <div>
            
      `;
      sidebarBrand.style.display = "flex";

      loginPrompt.style.visibility = "hidden"; // Oculta as opções de login/cadastro

      // Adiciona evento para o botão de logout
      document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "index.html"; // Redireciona para a home após o logout
      });
    } else {
      // Exibe as opções de login/cadastro se não houver usuário logado
      sidebarBrand.style.display = "none";
      loginPrompt.style.visibility = "visible";
    }
  }

  loginForm?.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const validCredentials = {
      "user@gmail.com": { password: "user", name: "Usuario" },
      "admin@gmail.com": { password: "admin", name: "Admin" },
    };

    if (
      validCredentials[email] &&
      validCredentials[email].password === password
    ) {
      const userName = validCredentials[email].name;
      localStorage.setItem("username", userName); // Armazena o nome do usuário
      if (email === "user@gmail.com") {
        window.location.href = "index.html"; // Redireciona para a página do usuário
      } else if (email === "admin@gmail.com") {
        window.location.href = "admin-vendas.html"; // Redireciona para a página do admin
      }
      updateUI(); // Atualiza a interface após o login
    } else {
      alert("Login ou senha incorretos");
    }
  });

  updateUI(); // Atualiza a interface ao carregar a página
});
