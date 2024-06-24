package main

import (
	"encoding/json"
	"log"
	"net/http"
	"runtime"
)

func ForceGC(w http.ResponseWriter, req *http.Request) {

	log.Println("forcing gc")

	runtime.GC()

	type response struct {
		Message string
	}
	res := response{
		Message: "runtime.GC() called",
	}

	json.NewEncoder(w).Encode(res)

}
