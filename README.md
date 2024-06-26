# gc_knobs
front and back end for experimenting with Go's garbage collection tuning knobs (GOMEMLIMIT and GOGC)
## How to use
<p>clone the repo</p>
<p>go build -o gc_knobs *.go</p>
<p>./gc_knobs  or  GOMEMLIMIT=250MiB GOGC=50 ./gc_knobs</p>
<p>open browser to localhost:8000 </p>

The app uses the go-git library and git repos (of your choice) that you have cloned to your computer.  The app does not fetch them from github.

For example, 
to create a steady state for the garbage collector, you could read the repo for Ruby on Rails into memory 50 times with a 2 second pause in between each read.

curl -H 'Content-Type: application/json' -d '{"path":"/path/to/rails", "repeat":"50", "pause":"2"}' -X POST  http://localhost:8000/git_repo

Then, if you want to, create a transitory spike in memory, you could open another terminal window and read youtube-dl into memory once.

<p>curl -H 'Content-Type: application/json' -d '{"path":"/path/to/youtube-dl", "repeat":"1", "pause":"1"}' -X POST  http://localhost:8000/git_repo</p>

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

curl -H 'Content-Type: application/json' -d '{"path":"/Users/mm/rails", "repeat":"50", "pause":"2"}' -X POST  http://localhost:8000/git_repo

and then using the Rust repository to create a heap spike

curl -H 'Content-Type: application/json' -d '{"path":"/Users/mm/rust", "repeat":"3", "pause":"1"}' -X POST  http://localhost:8000/git_repo

