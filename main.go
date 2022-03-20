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


	e.GET("/tracks", func(c echo.Context) error {
		// return c.String(http.StatusOK, "GET Landing")
	
		var tracks []string
		rows, _ := database.Query("SELECT Name, Composer FROM Track WHERE name LIKE '%snowball%';")
		var name string
		var comp string
		for rows.Next(){
			rows.Scan(&name, &comp)
			fmt.Println("Name: " + name + " " + "Composor: " + comp)
			tracks = append(tracks, name)
		}
	
		return c.JSON(http.StatusOK, tracks)

	})

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}