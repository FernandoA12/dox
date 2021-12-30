package utils

import (
	"fmt"
	"os"
	"text/template"
)

func CreateFileFromTemplate(templatePath string, filePath string, data interface{}) {
	t, _ := template.ParseFiles(templatePath)
	f, _ := os.Create(filePath)

	t.Execute(f, data)
	f.Close()

	fmt.Println("✔️  Arquivo criado " + filePath)
}
