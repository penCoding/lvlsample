package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/labstack/echo"
	_ "github.com/mattn/go-sqlite3"
	log "github.com/sirupsen/logrus"
)

// creating type Song struct
type Song struct {
	Composor string
	Title string
	Album string
}

func main() {

	// logging to stdout
	log.SetOutput(os.Stdout)
	log.SetFormatter(&log.JSONFormatter{})

	// setting Port to env variable and if variable doesn't exist set it to 4041
	port := os.Getenv("MY_APP_PORT")
	if port == "" {
		port = "4041"
	}

	// echo Server
	e := echo.New()
	
	// setting db driver and db location
	database, _ := sql.Open("sqlite3", "./Chinook_Sqlite.db")

	// HTTP GET
	e.GET("/tracks/:name", func(c echo.Context) error {

		// get search string from param
		getName := c.Param("name")

		// logging request information 
		log.Println("Searching for Track titles containing string: " + getName)

		// slice of song to hold track info from search results
		var songs []Song
		
		// query database using search parameter
		rows, err := database.Query("SELECT TrackId, Name, AlbumId, Composer FROM Track WHERE name LIKE '%" + getName +"%';")
		if err != nil {
			log.Fatal(err)
		}

		for rows.Next(){
			// some db entries have empty values for artist so declaring variables here wipes them after each row to empty out the variables 
			var name string
			var id int
			var albId int
			var comp string
			
			// scan row and fill variables
			rows.Scan(&id, &name, &albId, &comp)
			
			
			// take album ID from track query and use it to get album title
			rows, err := database.Query("SELECT Title FROM Album WHERE AlbumId = " + strconv.Itoa(albId) +";")
			if err != nil {
				log.Fatal(err)
			}
			// album title cannot be null so this variable is ok outside of Next
			var albTitle string
			for rows.Next(){
				rows.Scan(&albTitle)
			}
			
			// create song instance
			s := Song{Composor: comp, Title: name, Album: albTitle}
			
			// append track to song slice
			songs = append(songs, s)

			// convert struct to JSON for logging
			data, err := json.Marshal(s)
			if err != nil {
				log.Fatal(err)
			}
			
			// log song information
			log.Printf("%s\n", data)
		}
		
		// return slice of string in json format with 200 status code
		return c.JSON(http.StatusOK, songs)

	})

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}