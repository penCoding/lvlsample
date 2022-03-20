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


	e.GET("/tracks/:name", func(c echo.Context) error {

		// get search string from param
		getName := c.Param("name")
		// slice of string to hold track names from search results
		var tracks []string
		// query database with string from URL
		rows, _ := database.Query("SELECT TrackId, Name, AlbumId, Composer FROM Track WHERE name LIKE '%" + getName +"%';")
		// variables for database field scans
		var name string
		var id int
		var alId int
		var comp string
		for rows.Next(){
			rows.Scan(&id, &name, &alId, &comp)
			fmt.Println("Name: " + name + " " + "Composor: " + comp)
			// append track to tracks slice
			tracks = append(tracks, name)

		}
		
		// return slice of string in json format with 200 status
		return c.JSON(http.StatusOK, tracks)

	})

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}