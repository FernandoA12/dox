package commands

import (
	utils "dox/utils"
	"fmt"
	"strings"
)

func CreateUseCase(name string, usecase string) {
	fmt.Println("\nš± Gerando os casos de uso da entidade: " + name + "...\n")

	filename := strings.Title(name)

	utils.CreateFolder("./src/useCases/" + filename)

	switch usecase {
	case "create":
		fmt.Println("\nš CREATE: " + name + "...\n")
		createUseCase(filename, "Create", true)
	case "delete":
		fmt.Println("\nš DELETE: " + name + "...\n")
		createUseCase(filename, "Delete", true)
	case "update":
		fmt.Println("\nš UPDATE: " + name + "...\n")
		createUseCase(filename, "Update", true)
	case "getAll":
		fmt.Println("\nš GET ALL: " + name + "...\n")
		createUseCase(filename, "GetAll", false)
	case "getById":
		fmt.Println("\nš GET BY ID: " + name + "...\n")
		createUseCase(filename, "GetById", false)
	default:
		fmt.Println("\nš CREATE: " + name + "...\n")
		createUseCase(filename, "Create", true)
		fmt.Println("\nš DELETE: " + name + "...\n")
		createUseCase(filename, "Delete", true)
		fmt.Println("\nš GET ALL: " + name + "...\n")
		createUseCase(filename, "GetAll", false)
		fmt.Println("\nš GET BY ID: " + name + "...\n")
		createUseCase(filename, "GetById", false)
		fmt.Println("\nš UPDATE: " + name + "...\n")
		createUseCase(filename, "Update", true)
	}
}

func createUseCase(filename string, usecase string, withDTO bool) {
	opts := map[string]string{
		"Name": filename,
		"name": strings.ToLower(filename),
	}

	utils.CreateFolder("./src/useCases/" + filename + "/" + usecase + filename)
	utils.CreateFileFromTemplate("/templates/UseCaseExample/"+usecase+"UseCaseExample/"+usecase+"UseCaseExampleController.ts", createFilePath(filename, usecase, "Controller"), opts)
	if withDTO {
		utils.CreateFileFromTemplate("/templates/UseCaseExample/"+usecase+"UseCaseExample/"+usecase+"UseCaseExampleDTO.ts", createFilePath(filename, usecase, "DTO"), opts)
	}
	utils.CreateFileFromTemplate("/templates/UseCaseExample/"+usecase+"UseCaseExample/"+usecase+"UseCaseExampleUseCase.ts", createFilePath(filename, usecase, "UseCase"), opts)
	utils.CreateFileFromTemplate("/templates/UseCaseExample/"+usecase+"UseCaseExample/index.ts", createFilePath(filename, usecase, "index"), opts)
}

func createFilePath(filename string, usecase string, typefile string) string {
	path := filename + "/" + usecase + filename + "/"
	filepath := usecase + filename + typefile + ".ts"

	if typefile == "index" {
		filepath = "index.ts"
	}

	return "./src/useCases/" + path + filepath
}
