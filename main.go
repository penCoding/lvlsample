package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/labstack/echo"
	_ "github.com/mattn/go-sqlite3"
)

type Song struct {
	Artist string
	Title string
	Album string
}

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
		// slice of song to hold track info from search results
		var songs []Song
		// query database with string from URL
		rows, _ := database.Query("SELECT TrackId, Name, AlbumId, Composer FROM Track WHERE name LIKE '%" + getName +"%';")
		
		for rows.Next(){
			// Some db entries have empty values for artist so declaring variables here wipes them after each row to empty out the variables 
			var name string
			var id int
			var albId int
			var comp string
			
			rows.Scan(&id, &name, &albId, &comp)
			// take album ID from track query and search for it to get album title
			rows, _ := database.Query("SELECT Title FROM Album WHERE AlbumId LIKE " + strconv.Itoa(albId) +";")
			var albTitle string
			for rows.Next(){
				rows.Scan(&albTitle)
			}
			
			fmt.Println("Track Name: " + name + " " + "Composor: " + comp + "Album: " + albTitle)
			// append track to song slice
			songs = append(songs, Song{Artist: comp, Title: name, Album: albTitle})

		}
		
		// return slice of string in json format with 200 status
		return c.JSON(http.StatusOK, songs)

	})

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}