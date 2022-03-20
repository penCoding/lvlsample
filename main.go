package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo"
	_ "github.com/mattn/go-sqlite3"
)

func main() {

	port := os.Getenv("MY_APP_PORT")
	if port == "" {
		port = "4041"
	}

	e := echo.New()

	database, _ := sql.Open("sqlite3", "./Chinook_Sqlite.db")
	rows, _ := database.Query("Select name FROM Track")
	var name string
	for rows.Next(){
		rows.Scan(&name)
		fmt.Println("Name: " + name)
	}


	e.GET("/tracks", func(c echo.Context) error {
		return c.String(http.StatusOK, "GET Landing")
	})

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}