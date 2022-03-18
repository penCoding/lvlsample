package main

import (
	"net/http"
	"os"

	"github.com/labstack/echo"
)

func main() {

	port := os.Getenv("MY_APP_PORT")
	if port == "" {
		port = "4041"
	}

	e := echo.New()

	e.GET("/tracks", func(c echo.Context) error {
		return c.String(http.StatusOK, "GET Landing")
	})

}