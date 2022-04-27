Porque foi criada a pasta service?
Só para recapitular, o SOLID diz que o módulo ele deve deve ter uma e somente uma razão para ele mudar.
Isso quer dizer que o service tem a responsabilidade para criar/cadastrar uma categoria.

Quando temos em mente o SOLID, precisamos ter o contexto e separar suas responsabilidades.

Assim, iremos criar uma categoria "CreateCategoryService".

Criação de um método execute(), ele será responsável por tudo que o create precisa fazer.

Retiramos a pasta service e criamos as Use Case para separarmos as responsabilidades ainda mais em category e specification