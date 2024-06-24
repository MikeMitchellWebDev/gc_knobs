package main

import (
	"expvar"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/git_repo", GitRepo)

	mux.HandleFunc("/force_gc", ForceGC)
	mux.HandleFunc("/set_memlimit", SetMemoryLimit)
	mux.HandleFunc("/set_gogc", SetGCPercent)
	mux.HandleFunc("/free_memory", DebugFreeOSMemory)
	mux.HandleFunc("/print_all_metrics", printAllMetrics)
	mux.HandleFunc("/print_some_metrics", printSomeMetrics)
	mux.Handle("/debug/vars", expvar.Handler())

	mux.HandleFunc("/dist/assets/index-CbqqRaG6.js", func(w http.ResponseWriter, r *http.Request) {

		http.ServeFile(w, r, "./dist/assets/index-CbqqRaG6.js")

	})

	mux.HandleFunc("/dist/assets/index-CsnRi_qw.css", func(w http.ResponseWriter, r *http.Request) {

		http.ServeFile(w, r, "./dist/assets/index-CsnRi_qw.css")
	})

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		http.ServeFile(w, r, "./dist/index.html")
	})
	log.Fatal(http.ListenAndServe(":8000", mux))
}
