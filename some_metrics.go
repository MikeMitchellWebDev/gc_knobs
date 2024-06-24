package main

import (
	"encoding/json"
	"net/http"
	"runtime/metrics"
)

func printSomeMetrics(w http.ResponseWriter, req *http.Request) {

	descs := metrics.All()

	// Create a sample for each metric.
	samples := make([]metrics.Sample, len(descs))
	for i := range samples {
		samples[i].Name = descs[i].Name
	}
	type Metricsresponse struct {
		GcCycles uint64 `json:"/gc/cycles/automatic:gc-cycles"`

		GOGCPercent uint64 `json:"/gc/gogc:percent"`

		GOMEMLIMIT uint64 `json:"/gc/gomemlimit:bytes"`

		HeapAllocBytes uint64 `json:"/gc/heap/allocs:bytes"`

		FreesBytes uint64 `json:"/gc/heap/frees:bytes"`

		GcHeapGoal uint64 `json:"/gc/heap/goal:bytes"`

		GcHeapLive uint64 `json:"/gc/heap/live:bytes"`

		MemoryHeapFreeBytes uint64 `json:"/memory/classes/heap/free:bytes"`

		MemoryHeapObjectsBytes uint64 `json:"/memory/classes/heap/objects:bytes"`

		MemoryHeapReleasedBytes uint64 `json:"/memory/classes/heap/released:bytes"`

		MemoryHeapUnusedBytes uint64 `json:"/memory/classes/heap/unused:bytes"`

		MemoryTotalBytes uint64 `json:"/memory/classes/total:bytes"`

		SchedPausesStoppingGcSeconds float64 `json:"/sched/pauses/stopping/gc:seconds"`

		SchedPausesTotalGcSeconds float64 `json:"/sched/pauses/total/gc:seconds"`

		SyncMutexWaitTotalSeconds float64 `json:"/sync/mutex/wait/total:seconds"`
	}
	res := Metricsresponse{}

	metrics.Read(samples)
	for _, sample := range samples {
		// Pull out the name and value.
		name, value := sample.Name, sample.Value
		switch name {
		case "/gc/cycles/automatic:gc-cycles":
			res.GcCycles = value.Uint64()
		case "/gc/gogc:percent":
			res.GOGCPercent = value.Uint64()
		case "/gc/gomemlimit:bytes":
			res.GOMEMLIMIT = value.Uint64()
		case "/gc/heap/allocs:bytes":
			res.HeapAllocBytes = value.Uint64()
		case "/gc/heap/frees:bytes":
			res.FreesBytes = value.Uint64()
		case "/gc/heap/goal:bytes":
			res.GcHeapGoal = value.Uint64()
		case "/gc/heap/live:bytes":
			res.GcHeapLive = value.Uint64()
		case "/memory/classes/heap/free:bytes":
			res.MemoryHeapFreeBytes = value.Uint64()
		case "/memory/classes/heap/objects:bytes":
			res.MemoryHeapObjectsBytes = value.Uint64()
		case "/memory/classes/heap/released:bytes":
			res.MemoryHeapReleasedBytes = value.Uint64()
		case "/memory/classes/heap/unused:bytes":
			res.MemoryHeapUnusedBytes = value.Uint64()
		case "/memory/classes/total:bytes":
			res.MemoryTotalBytes = value.Uint64()
		case "/sched/pauses/stopping/gc:seconds":
			res.SchedPausesStoppingGcSeconds = medianBucket(value.Float64Histogram())
		case "/sched/pauses/total/gc:seconds":
			res.SchedPausesTotalGcSeconds = medianBucket(value.Float64Histogram())
		case "/sync/mutex/wait/total:seconds":
			res.SyncMutexWaitTotalSeconds = value.Float64()
		default:
		}
	}
	samples = nil

	json.NewEncoder(w).Encode(res)

}
