package main

import (
	"encoding/json"
	"log"
	"net/http"
	"runtime/debug"
)

func DebugFreeOSMemory(w http.ResponseWriter, req *http.Request) {

	log.Println("debug.FreeOSMemory()")

	debug.FreeOSMemory()

	type response struct {
		Message string
	}
	res := response{
		Message: "debug.FreeOSMemory has been called", // does it have return value?
	}

	json.NewEncoder(w).Encode(res)
}
