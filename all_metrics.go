package main

import (
	"encoding/json"
	"net/http"
	"runtime/metrics"
)

func printAllMetrics(w http.ResponseWriter, req *http.Request) {

	descs := metrics.All()

	samples := make([]metrics.Sample, len(descs))

	for i := range samples {
		samples[i].Name = descs[i].Name
	}
	type Metricsresponse struct {
		Cpuseconds                      float64 `json:"/cpu/classes/gc/mark/assist:cpu-seconds"`
		GcCycles                        uint64  `json:"/gc/cycles/automatic:gc-cycles"`
		ForcedGcCycles                  uint64  `json:"/gc/cycles/forced:gc-cycles"`
		GOGCPercent                     uint64  `json:"/gc/gogc:percent"`
		GOMEMLIMIT                      uint64  `json:"/gc/gomemlimit:bytes"`
		HeapAllocBytes                  uint64  `json:"/gc/heap/allocs:bytes"`
		HeapAllocObjects                uint64  `json:"/gc/heap/allocs:objects"`
		FreesBytes                      uint64  `json:"/gc/heap/frees:bytes"`
		FreesObjects                    uint64  `json:"/gc/heap/frees:objects"`
		GcHeapGoal                      uint64  `json:"/gc/heap/goal:bytes"`
		GcHeapLive                      uint64  `json:"/gc/heap/live:bytes"`
		GcHeapObjects                   uint64  `json:"/gc/heap/objects:objects"`
		GcHeapTinyObjects               uint64  `json:"/gc/heap/tiny/allocs:objects"`
		GcLimiterEnabled                uint64  `json:"/gc/limiter/last-enabled:gc-cycle"`
		GcScanGlobalsBytes              uint64  `json:"/gc/scan/globals:bytes"`
		GcHeapScannableBytes            uint64  `json:"/gc/scan/heap:bytes"`
		GcScanStackBytes                uint64  `json:"/gc/scan/stack:bytes"`
		GcScanTotalBytes                uint64  `json:"/gc/scan/total:bytes"`
		GcStackStartingSizeBytes        uint64  `json:"/gc/stack/starting-size:bytes"`
		MemoryHeapFreeBytes             uint64  `json:"/memory/classes/heap/free:bytes"`
		MemoryHeapObjectsBytes          uint64  `json:"/memory/classes/heap/objects:bytes"`
		MemoryHeapReleasedBytes         uint64  `json:"/memory/classes/heap/released:bytes"`
		MemoryHeapStacksBytes           uint64  `json:"/memory/classes/heap/stacks:bytes"`
		MemoryHeapUnusedBytes           uint64  `json:"/memory/classes/heap/unused:bytes"`
		MemoryMetaDataCacheFreeBytes    uint64  `json:"/memory/classes/metadata/mcache/free:bytes"`
		MemoryMetaDataCacheInuseBytes   uint64  `json:"/memory/classes/metadata/mcache/inuse:bytes"`
		MemoryMetaDataMspanFreeBytes    uint64  `json:"/memory/classes/metadata/mspan/free:bytes"`
		MemoryMetaDataMspanInuseBytes   uint64  `json:"/memory/classes/metadata/mspan/inuse:bytes"`
		MemoryMetaDataOtherBytes        uint64  `json:"/memory/classes/metadata/other:bytes"`
		MemoryOsStackBytes              uint64  `json:"/memory/classes/os-stacks:bytes"`
		MemoryOtherBytes                uint64  `json:"/memory/classes/other:bytes"`
		MemoryProfilingBucketsBytes     uint64  `json:"/memory/classes/profiling/buckets:bytes"`
		MemoryTotalBytes                uint64  `json:"/memory/classes/total:bytes"`
		SchedGoMaxProcsThreads          uint64  `json:"/sched/gomaxprocs:threads"`
		SchedGoroutines                 uint64  `json:"/sched/goroutines:goroutines"`
		SchedLatenciesSeconds           float64 `json:"/sched/latencies:seconds"`
		SchedPausesStoppingGcSeconds    float64 `json:"/sched/pauses/stopping/gc:seconds"`
		SchedPausesStoppingOtherSeconds float64 `json:"/sched/pauses/stopping/other:seconds"`
		SchedPausesTotalGcSeconds       float64 `json:"/sched/pauses/total/gc:seconds"`
		SchedPausesTotalOtherSeconds    float64 `json:"/sched/pauses/total/other:seconds"`

		SyncMutexWaitTotalSeconds float64 `json:"/sync/mutex/wait/total:seconds"`
	}
	res := Metricsresponse{}

	metrics.Read(samples)
	for _, sample := range samples {
		name, value := sample.Name, sample.Value
		switch name {
		case "/cpu/classes/gc/mark/assist:cpu-seconds":
			res.Cpuseconds = value.Float64()
		case "/gc/cycles/automatic:gc-cycles":
			res.GcCycles = value.Uint64()
		case "/gc/cycles/forced:gc-cycles":
			res.ForcedGcCycles = value.Uint64()
		case "/gc/gogc:percent":
			res.GOGCPercent = value.Uint64()
		case "/gc/gomemlimit:bytes":
			res.GOMEMLIMIT = value.Uint64()
		case "/gc/heap/allocs:bytes":
			res.HeapAllocBytes = value.Uint64()
		case "/gc/heap/allocs:objects":
			res.HeapAllocObjects = value.Uint64()
		case "/gc/heap/frees:bytes":
			res.FreesBytes = value.Uint64()
		case "/gc/heap/frees:objects":
			res.FreesObjects = value.Uint64()
		case "/gc/heap/goal:bytes":
			res.GcHeapGoal = value.Uint64()
		case "/gc/heap/live:bytes":
			res.GcHeapLive = value.Uint64()
		case "/gc/heap/objects:objects":
			res.GcHeapObjects = value.Uint64()
		case "/gc/heap/tiny/allocs:objects":
			res.GcHeapTinyObjects = value.Uint64()
		case "/gc/limiter/last-enabled:gc-cycle":
			res.GcLimiterEnabled = value.Uint64()
		case "/gc/scan/globals:bytes":
			res.GcScanGlobalsBytes = value.Uint64()
		case "/gc/scan/heap:bytes":
			res.GcHeapScannableBytes = value.Uint64()
		case "/gc/scan/stack:bytes":
			res.GcScanStackBytes = value.Uint64()
		case "/gc/scan/total:bytes":
			res.GcScanTotalBytes = value.Uint64()
		case "/gc/stack/starting-size:bytes":
			res.GcStackStartingSizeBytes = value.Uint64()
		case "/memory/classes/heap/free:bytes":
			res.MemoryHeapFreeBytes = value.Uint64()
		case "/memory/classes/heap/objects:bytes":
			res.MemoryHeapObjectsBytes = value.Uint64()
		case "/memory/classes/heap/released:bytes":
			res.MemoryHeapReleasedBytes = value.Uint64()
		case "/memory/classes/heap/stacks:bytes":
			res.MemoryHeapStacksBytes = value.Uint64()
		case "/memory/classes/heap/unused:bytes":
			res.MemoryHeapUnusedBytes = value.Uint64()
		case "/memory/classes/metadata/mcache/free:bytes":
			res.MemoryMetaDataCacheFreeBytes = value.Uint64()
		case "/memory/classes/metadata/mcache/inuse:bytes":
			res.MemoryMetaDataCacheInuseBytes = value.Uint64()
		case "/memory/classes/metadata/mspan/free:bytes":
			res.MemoryMetaDataMspanFreeBytes = value.Uint64()
		case "/memory/classes/metadata/mspan/inuse:bytes":
			res.MemoryMetaDataMspanInuseBytes = value.Uint64()
		case "/memory/classes/metadata/other:bytes":
			res.MemoryMetaDataOtherBytes = value.Uint64()
		case "/memory/classes/os-stacks:bytes":
			res.MemoryOsStackBytes = value.Uint64()
		case "/memory/classes/other:bytes":
			res.MemoryOtherBytes = value.Uint64()
		case "/memory/classes/profiling/buckets:bytes":
			res.MemoryProfilingBucketsBytes = value.Uint64()
		case "/memory/classes/total:bytes":
			res.MemoryTotalBytes = value.Uint64()
		case "/sched/gomaxprocs:threads":
			res.SchedGoMaxProcsThreads = value.Uint64()
		case "/sched/goroutines:goroutines":
			res.SchedGoroutines = value.Uint64()
		case "/sched/latencies:seconds":
			res.SchedLatenciesSeconds = medianBucket(value.Float64Histogram())
		case "/sched/pauses/stopping/gc:seconds":
			res.SchedPausesStoppingGcSeconds = medianBucket(value.Float64Histogram())
		case "/sched/pauses/stopping/other:seconds":
			res.SchedPausesStoppingOtherSeconds = medianBucket(value.Float64Histogram())
		case "/sched/pauses/total/gc:seconds":
			res.SchedPausesTotalGcSeconds = medianBucket(value.Float64Histogram())
		case "/sched/pauses/total/other:seconds":
			res.SchedPausesTotalOtherSeconds = medianBucket(value.Float64Histogram())
		case "/sync/mutex/wait/total:seconds":
			res.SyncMutexWaitTotalSeconds = value.Float64()
		default:
		}
	}

	samples = nil

	json.NewEncoder(w).Encode(res)

}

func medianBucket(h *metrics.Float64Histogram) float64 {
	total := uint64(0)
	for _, count := range h.Counts {
		total += count
	}
	thresh := total / 2
	total = 0
	for i, count := range h.Counts {
		total += count
		if total >= thresh {
			return h.Buckets[i]
		}
	}
	panic("should not happen")
}
