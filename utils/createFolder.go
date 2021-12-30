package utils

import (
	"fmt"
	"os"
)

func CreateFolder(folderPath string) {
	fmt.Println("✔️  Pasta criada " + folderPath)
	os.Mkdir(folderPath, 0755)
}
