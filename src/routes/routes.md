Para separar todas as funcionalidades existentes nas rotas, precisamos utilizar o controller.

São basicamente classes que recebem a nossa requisição e retornam a resposta para quem está chamando elas.

Qual a diferença da utilização das rotas e controller, sendo que ambas tem a mesma funcionalidade?
A diferença é que a nossa rota de fato é separar a utilização das rotas para serem usadas o seu propósito, com o mínimo de código possível, somente para chamar a rota. Toda a responsabilidade de requisição e resposta, deixaremos para o controller.

Use Cases (Regras de negócios): São praticamente as nossas operações para que possamos separar o que cada módulo faz, por exemplo, criação de categoria, listagem de categoria.
