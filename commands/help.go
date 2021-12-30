package commands

import (
	"fmt"
)

func Help() {
	fmt.Println("DOX - Framework de desenvolvimento de APIs\n")
	fmt.Println("✅ init <name> \t\t\t\t\t\t\t\t\t\t Inicializa um novo projeto")
	fmt.Println("✅ create:entity <name> \t\t\t\t\t\t\t\t Cria uma nova entidade")
	fmt.Println("✅ create:repo <name> \t\t\t\t\t\t\t\t\t Cria um novo repositório")
	fmt.Println("✅ create:route <name> \t\t\t\t\t\t\t\t\t Cria uma nova rota")
	fmt.Println("✅ create:schema <name> \t\t\t\t\t\t\t\t Cria um novo schema")
	fmt.Println("✅ create:usecase <name> <usecase?: create | update | delete | getAll | getById> \t Cria um novo usecase")
	fmt.Println("✅ help \t\t\t\t\t\t\t\t\t\t Exibe ajuda")
}
