package main

import (
	"encoding/json"
	"mime"
	"net/http"
	"runtime/debug"
)

func SetGCPercent(w http.ResponseWriter, req *http.Request) {

	type GC struct {
		GCPercent int `json:"gcpercent"`
	}
	contentType := req.Header.Get("Content-Type")
	mediatype, _, err := mime.ParseMediaType(contentType)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if mediatype != "application/json" {
		http.Error(w, "expect application/json Content-Type", http.StatusUnsupportedMediaType)
		return
	}

	dec := json.NewDecoder(req.Body)
	dec.UseNumber()
	dec.DisallowUnknownFields()

	var rt GC
	if err := dec.Decode(&rt); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	oldGC := debug.SetGCPercent(rt.GCPercent)

	type response struct {
		GCPercent         int `json:"new_gogc"`
		PreviousGCPercent int `json:"previous_gogc"`
	}

	res := response{
		GCPercent:         rt.GCPercent,
		PreviousGCPercent: oldGC,
	}

	json.NewEncoder(w).Encode(res)
}
