package main

import (
	"encoding/json"
	"log"
	"mime"
	"net/http"
	"strconv"
	"time"

	git "github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing/object"
)

func GitRepo(w http.ResponseWriter, req *http.Request) {

	type GitRepo struct {
		Path   string `json:"path"`
		Repeat string `json:"repeat"`
		Pause  string `json:"pause`
	}
	type ResponseId struct {
		Id int `json:"id"`
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

	var gr GitRepo
	if err := dec.Decode(&gr); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var execTime time.Duration

	startTime := time.Now()
	repeat, err := strconv.Atoi(gr.Repeat)
	pause, err := strconv.Atoi(gr.Pause)
	_, _, _ = getLog(gr.Path, repeat, pause)

	stopTime := time.Now()
	executionTime := stopTime.Sub(startTime)
	execTime = executionTime

	type response struct {
		Path          string        `json:"path"`
		Repeat        int           `json:"repeat"`
		Pause         int           `json:"pause"`
		ExecutionTime time.Duration `json:"execution_time (nanoseconds)"`
	}

	res := response{
		Path:          gr.Path,
		Repeat:        repeat,
		Pause:         pause,
		ExecutionTime: execTime,
	}

	json.NewEncoder(w).Encode(res)

}
func getLog(path string, repeat int, pause int) (string, int, int) {

	if repeat == 0 {
		repeat = 1
	}

	for i := 1; i <= repeat; i++ {

		r, err := git.PlainOpen(path)

		if err != nil {
			log.Printf("%+v\n", err)
		}

		ref, err := r.Head()

		cIter, err := r.Log(&git.LogOptions{From: ref.Hash()})

		var cCount int
		err = cIter.ForEach(func(c *object.Commit) error {
			cCount++

			return nil
		})

		// r = nil
		if repeat == 1 {

		} else {

			time.Sleep(time.Duration(pause) * time.Second)
		}

	}

	return path, repeat, pause

}
