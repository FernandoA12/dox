package commands

import (
	utils "dox/utils"
	"fmt"
	"os/exec"
	"strings"
)

func Init(opts []string) {
	fmt.Println("📦 Criando projeto\n\n ")

	if len(opts) == 0 {
		fmt.Println("🚫 Nome do projeto não informado")
		return
	}

	basePath := "./" + opts[0]

	utils.CreateFolder(basePath)
	utils.CreateFolder(basePath + "/src")
	utils.CreateFolder(basePath + "/src/config")
	utils.CreateFolder(basePath + "/src/entities")
	utils.CreateFolder(basePath + "/src/repositories")
	utils.CreateFolder(basePath + "/src/routes")
	utils.CreateFolder(basePath + "/src/schemas")
	utils.CreateFolder(basePath + "/src/useCases")

	utils.CreateFileFromTemplate("./templates/init/.env.example", basePath+"/.env", nil)
	utils.CreateFileFromTemplate("./templates/init/.eslintrc.js", basePath+"/.eslintrc.js", nil)
	utils.CreateFileFromTemplate("./templates/init/.gitignore", basePath+"/.gitignore", nil)
	utils.CreateFileFromTemplate("./templates/init/package.json", basePath+"/package.json", map[string]string{"name": strings.ToLower(opts[0])})
	utils.CreateFileFromTemplate("./templates/init/index.ts", basePath+"/src/index.ts", nil)
	utils.CreateFileFromTemplate("./templates/init/mongodb.ts", basePath+"/src/config/mongodb.ts", nil)
	utils.CreateFileFromTemplate("./templates/init/multer.ts", basePath+"/src/config/multer.ts", nil)
	utils.CreateFileFromTemplate("./templates/init/server.ts", basePath+"/src/config/server.ts", nil)
	utils.CreateFileFromTemplate("./templates/init/index.routes.ts", basePath+"/src/routes/index.routes.ts", nil)

	fmt.Println("\n\n⏳ Instalando dependências...")
	cmd := exec.Command("bash", "-c", "cd "+opts[0]+" && "+"yarn")
	cmd.Run()
	fmt.Println("\n\n✅ Projeto criado com sucesso!")
}
