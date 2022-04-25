Utilizaçaõ do Use Case

Separamos os nossos casos de uso, como a retirada do service e separando em Use Cases.

Trabalhamos em módulos de carro e cada Use Case é uma categoria (uma pasta).

O controller que antes tinha uma resposabilidade dentro da rota, foi separada e utilizamos o handle passando o request e response, o que era antes
no service, passando a usar o use case e o index, fazendo a instância e passando todas as informações.

O controller que exportamos, sendo passada para a rota.