package commands

import (
	utils "dox/utils"
	"fmt"
)

type File struct {
	BasePath     string
	TemplatePath string
	FileName     string
	Opts         map[string]string
}

func CreateFile(data File) {
	fmt.Println("\n👱 Gerando arquivo: " + data.FileName + "...\n\n")

	utils.CreateFileFromTemplate("/templates"+data.TemplatePath, data.BasePath+"/"+data.FileName, data.Opts)
}
