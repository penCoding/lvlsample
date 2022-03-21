package srch

import (
	"fmt"
	"os"

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

func Start() {
	// logging to stdout and formatting to JSON
	log.SetOutput(os.Stdout)
	log.SetFormatter(&log.JSONFormatter{})

	// setting Port to env variable and if variable doesn't exist set it to 4041
	port := os.Getenv("MY_APP_PORT")
	if port == "" {
		port = "4041"
	}

	// echo Server
	e := echo.New()

	// set endpoint path and handler function
	e.GET("/tracks/:name", searchTracks)

	e.Logger.Print("Listening on port 4041")
	e.Logger.Fatal(e.Start(fmt.Sprintf("localhost:%s", port)))

}