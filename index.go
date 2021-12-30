package main

import (
	commands "dox/commands"
	"os"
	"strings"
)

func main() {
	args := os.Args[1:]
	if len(args) == 0 {
		commands.Help()
		os.Exit(0)
	}
	command := args[0]
	opts := args[1:]

	var data commands.File
	var optsFile map[string]string

	if len(opts) > 0 {
		optsFile = map[string]string{
			"Name": strings.Title(opts[0]),
			"name": strings.ToLower(opts[0]),
		}
	}

	switch command {
	case "create:entity":
		data = commands.File{
			BasePath:     "./src/entities",
			TemplatePath: "/EntityExample.ts",
			FileName:     strings.Title(opts[0]) + ".ts",
			Opts:         optsFile,
		}

	case "create:repo":
		data = commands.File{
			BasePath:     "./src/repositories",
			TemplatePath: "/RepositoryExample.ts",
			FileName:     strings.Title(opts[0]) + "Repository.ts",
			Opts:         optsFile,
		}

	case "create:route":
		data = commands.File{
			BasePath:     "./src/routes",
			TemplatePath: "/RouteExample.ts",
			FileName:     strings.ToLower(opts[0]) + ".routes.ts",
			Opts:         optsFile,
		}

	case "create:schema":
		data = commands.File{
			BasePath:     "./src/schemas",
			TemplatePath: "/SchemaExample.ts",
			FileName:     strings.Title(opts[0]) + "Schema.ts",
			Opts:         optsFile,
		}
	case "init":
		commands.Init(opts)
		os.Exit(0)

	case "help":
		commands.Help()
		os.Exit(0)

	case "create:usecase":
		if bool(len(opts) >= 2) {
			commands.CreateUseCase(opts[0], opts[1])
			os.Exit(0)
		}
		commands.CreateUseCase(opts[0], "")
		os.Exit(0)

	default:
		commands.Help()
		os.Exit(0)
	}
	commands.CreateFile(data)

}
