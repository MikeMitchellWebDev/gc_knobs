package main

import (
	"encoding/json"
	"mime"
	"net/http"
	"runtime/debug"
)

var mib = 1 << 20 // one mebibyte or 2^ 20
var kib = 1024
var gb = 1024 * 1024 * 1024

func SetMemoryLimit(w http.ResponseWriter, req *http.Request) {

	type GC struct {
		MemLimit int    `json:"memlimit"`
		Unit     string `json:"unit`
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

	var unit int
	if rt.Unit == "" {
		unit = mib
	} else if rt.Unit == "MiB" {
		unit = mib
	} else if rt.Unit == "KiB" {
		unit = kib
	} else if rt.Unit == "GiB" {
		unit = gb
	}

	//curl -H 'Content-Type: application/json' -d '{"memlimit":2750, "unit":"MiB"}' -X POST http://localhost:8000/mem

	kk := unit * rt.MemLimit

	oldLimit := debug.SetMemoryLimit(int64(kk))

	type response struct {
		MemLimit         int    `json:"new_memlimit"`
		Unit             int    `json:"unit"`
		UnitInWords      string `json:"unit_in_words"`
		NewMemLimit      int    `json:"new_memory_limit"`
		PreviousMemLimit int64  `json:"previous_memlimit"`
	}

	res := response{
		MemLimit:         rt.MemLimit,
		Unit:             unit,
		UnitInWords:      rt.Unit,
		NewMemLimit:      rt.MemLimit * unit,
		PreviousMemLimit: oldLimit,
	}

	json.NewEncoder(w).Encode(res)

}
