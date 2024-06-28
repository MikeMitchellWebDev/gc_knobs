# gc_knobs
front and back end for experimenting with Go's garbage collection tuning knobs (GOMEMLIMIT and GOGC)
## How to use
<p>clone the repo</p>
<p>go build -o gc_knobs *.go</p>
<p>./gc_knobs  or  GOMEMLIMIT=250MiB GOGC=50 ./gc_knobs</p>
<p>open browser to localhost:8000 </p>

If you want to make bulk requests instead of using curl, you can also use the gc_knobs_client (see below)

The app uses the go-git library and git repos (of your choice) that you have cloned to your computer.  The app does not fetch them from github.

For example, 
to create a steady state for the garbage collector, you could read the repo for Ruby on Rails into memory 50 times with a 2 second sleep in between each read.

curl -H 'Content-Type: application/json' -d '{"path":"/path/to/rails", "repeat":"50", "sleep":"2"}' -X POST  http://localhost:8000/git_repo

Then, if you want to, create a transitory spike in memory, you could open another terminal window and read youtube-dl into memory once.

<p>curl -H 'Content-Type: application/json' -d '{"path":"/path/to/youtube-dl", "repeat":"1", "sleep":"1"}' -X POST  http://localhost:8000/git_repo</p>

## Understanding GOMEMLIMIT and GOGC
You can find tips for setting GOGC and GOMEMLIMIT at Go's garbage collection guide https://tip.golang.org/doc/gc-guide

## calling other functions in gc_knobs 

curl http://localhost:8000/force_gc  (calls runtime.GC)

curl http://localhost:8000/free_memory (calls debug.FreeOSMemory())

curl -H 'Content-Type: application/json' -d '{"gcpercent":75}' -X POST http://localhost:8000/set_gogc

curl -H 'Content-Type: application/json' -d '{"memlimit":2750, "unit":"MiB"}' -X POST http://localhost:8000/set_memlimit    (available units are KiB, MiB and GiB)

curl http://localhost:8000/print_all_metrics  (from runtime/Metrics package)

curl http://localhost:8000/print_some_metrics   (from runtime/Metrics package)

the browser app uses Go's expvar package 

## Reading the Live Graph
There are two real-time graphs. On the left, there is a bar chart of the current gc cycle. On the right, there is a real-time line graph over time. 

https://imgur.com/a/bxggcwk 

In this example, you can see there was a heap spike at approximately 3:16:45. In the bar chart on the left, it says the current values (NextGC is 801540296 bytes etc), which is also the reading of the NextGC on the right hand line graph (see above the graph) at its far right side (i.e the real time line graph moves from right to left). 

This example was run using ruby on rails to establish a steady state

curl -H 'Content-Type: application/json' -d '{"path":"/Users/mm/rails", "repeat":"50", "sleep":"2"}' -X POST  http://localhost:8000/git_repo

and then using the Rust repository to create a heap spike

curl -H 'Content-Type: application/json' -d '{"path":"/Users/mm/rust", "repeat":"3", "sleep":"1"}' -X POST  http://localhost:8000/git_repo

## git repositories as data source

You will have to clone a few git repositories of varying sizes to create a data source for GC Knobs. The far right column (NextGC range in GC_Knobs) gives the range for the NextGC value during a steady state created by running the following request for each repository.

curl -H 'Content-Type: application/json' -d '{"path":"/path/to/repository", "repeat":"30", "sleep":"1"}' -X POST  http://localhost:8000/git_repo

| Repository   | # of commits |  Objects/Megabytes (clone/download)     | NextGC range in GC_Knobs  |
| -------- | ------- | ------- | ---- |
| https://github.com/basecamp/trix.git  | ~3000    |  6.12 MiB (23963/23963)      | 8 to 10 MB   |
| https://github.com/basecamp/thruster.git | ~55 | (336/336), 97.64 KiB | default (4194304 bytes) |
| https://github.com/rust-lang/rust.git | ~250,000 | (2627300/2627300) 1.25 GiB | 400 to 730 mb|
| https://github.com/rails/rails.git | ~92,000| (875378/875378) 270.39 MiB | 194 to 311 mb|
| https://github.com/golang/go.git | ~60,000| (617857/617857), 345.54 MiB | 99 to 210 mb |
| https://github.com/jashkenas/backbone.git | ~3,500| (12505/12505), 26.61 MiB | 6 to 10 mb|
| https://github.com/ente-io/ente.git | ~30,000| (218660/218660), 485.70 MiB | 49 to 90 mb|
| https://github.com/eslint/eslint.git| ~10,000| (89275/89275), 42.07 MiB | 18 to 30 mb|

## the gc_knobs_client

after starting gc knobs, clone (https://github.com/MikeMitchellWebDev/gc_knobs_client) and run gc_knobs_client like this

./gc_knobs_client -g 200 -s 1 -r 10 -p "/Users/mm/rails"

This commmand will read a locally cloned copy of ruby on rails into memory
2000 times (spawning 200 go routines, each making the request 10 times with a sleep of 1 second between each request)


-g is the number of goroutines
-s is the sleep duration between requests
-r is the number of repeats
-p is the path to the locally cloned repository

You don't need the gc_knobs_client to use gc_knobs. You can also use gc_knobs with curl

curl -H 'Content-Type: application/json' -d '{"path":"/path/to/rails", "repeat":"50", "sleep":"2"}' -X POST  http://localhost:8000/git_repo


