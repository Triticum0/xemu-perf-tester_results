const kTooltipConfig = {
    align: "left",
    font: {
        family: "Courier New, monospace",
        size: 14
    }
};

const kCommonXAxisConfig = {
    automargin: true,
    tickangle: -25,
    categoryorder: 'category ascending'
};

const kCommonMarkerConfig = {
    size: 10
};

document.addEventListener("DOMContentLoaded", function () {
    const allRawData = [{"average_us": 45, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 742, "min_us": 33, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4546, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 25977, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 27015, "min_us": 25051, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 259776, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 189064, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 190151, "min_us": 187795, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 945324, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 2107, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 3060, "min_us": 1978, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 105369, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 222, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 1870, "min_us": 165, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 11112, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 128940, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 130746, "min_us": 128235, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 515762, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 933758, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 934688, "min_us": 932818, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 1867516, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 11148, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 13683, "min_us": 10221, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 111487, "xemu_version": "xemu-0.8.92-5-gd495c47d55- -d495c47d55ce523d1a634f39d2632006054ff80f"}, {"average_us": 107944, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 109705, "min_us": 101114, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-arrays", "total_us": 1079441, "xemu_version": "xemu-0.8.53-master-5685a6290cfbf7b022ec5e58a8ffb09f664c04e8"}, {"average_us": 116362, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 126188, "min_us": 114115, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinearrays", "total_us": 1163623, "xemu_version": "xemu-0.8.53-master-5685a6290cfbf7b022ec5e58a8ffb09f664c04e8"}, {"average_us": 583580, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 588055, "min_us": 580760, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinebuffers", "total_us": 5835801, "xemu_version": "xemu-0.8.53-master-5685a6290cfbf7b022ec5e58a8ffb09f664c04e8"}, {"average_us": 109641, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 112374, "min_us": 104660, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlineelements", "total_us": 1096414, "xemu_version": "xemu-0.8.53-master-5685a6290cfbf7b022ec5e58a8ffb09f664c04e8"}, {"average_us": 41, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 661, "min_us": 33, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4135, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 28455, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 44285, "min_us": 24221, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 284551, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 186842, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 187839, "min_us": 185910, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 934210, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 2066, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 3294, "min_us": 1942, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 103313, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 244, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 2547, "min_us": 167, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 12219, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 129692, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 131814, "min_us": 127938, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 518770, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 934150, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 937659, "min_us": 930633, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 1868301, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 10662, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 12896, "min_us": 9956, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 106624, "xemu_version": "xemu-0.8.92-3-g6b50fe27a2- -6b50fe27a22b2ed413e70ec098931fd63bf94ac9"}, {"average_us": 56, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 810, "min_us": 41, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 5636, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 50160, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 155305, "min_us": 32600, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 501602, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 248911, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 263756, "min_us": 243357, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1244558, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 3404, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 11577, "min_us": 2339, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 170204, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 269, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 521, "min_us": 221, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 13464, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 174636, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 176146, "min_us": 173434, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 698547, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 1189284, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 1219104, "min_us": 1159447, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 2378569, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 16410, "cpu_manufacturer": "AMD Ryzen 7 7730U with Radeon Graphics", "gpu_renderer": "AMD Radeon (TM) Graphics", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 19691, "min_us": 13171, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 164101, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 49, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 724, "min_us": 39, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4935, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 31356, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 39127, "min_us": 28880, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 313563, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 219615, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 222439, "min_us": 217281, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1098075, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 2863, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 6314, "min_us": 2349, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 143176, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 216, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 447, "min_us": 194, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 10827, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 149011, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 151611, "min_us": 147091, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 596045, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 1094749, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 1097976, "min_us": 1091512, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 2189499, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 14241, "cpu_manufacturer": "AMD Ryzen 7 5700X 8-Core Processor", "gpu_renderer": "NVIDIA GeForce RTX 3060 Ti/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 15212, "min_us": 12386, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 142412, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 47, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 667, "min_us": 33, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4710, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 26178, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 27933, "min_us": 24848, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 261781, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 191172, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 194767, "min_us": 189261, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 955860, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 2129, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 2974, "min_us": 1982, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 106491, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 210, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 1672, "min_us": 166, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 10527, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 129658, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 130528, "min_us": 128670, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 518633, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 961581, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 962029, "min_us": 961125, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 1923163, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 11464, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 13975, "min_us": 10247, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 114641, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 78, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 1673, "min_us": 43, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 7891, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 63034, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 85637, "min_us": 51594, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 630340, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 344819, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 364930, "min_us": 331746, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1724096, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 5027, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 7967, "min_us": 3721, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 251398, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 4649, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 34755, "min_us": 224, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 232455, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 240013, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 248957, "min_us": 236496, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 960052, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 1659252, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 1668241, "min_us": 1650254, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 3318504, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 22700, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 26826, "min_us": 20666, "os_system": "Windows", "renderer": "VK", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 227008, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 32, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 100, "max_us": 607, "min_us": 24, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 3207, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 41687, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 44116, "min_us": 40636, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 416872, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 252080, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 5, "max_us": 259447, "min_us": 248070, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1260403, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 2035, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 50, "max_us": 2407, "min_us": 1534, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 101768, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 122614, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 125281, "min_us": 120413, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-arrays", "total_us": 1226148, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 73745, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 76162, "min_us": 72866, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinearrays", "total_us": 737453, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 517110, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 520751, "min_us": 513013, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinebuffers", "total_us": 5171109, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 18249, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 18560, "min_us": 18049, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlineelements", "total_us": 182496, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 78, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 933, "min_us": 44, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 7898, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 67009, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 89187, "min_us": 51177, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 670093, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 368523, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 415306, "min_us": 342922, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1842617, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 4163, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 8643, "min_us": 2911, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 208167, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 333, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 608, "min_us": 224, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 16667, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 248420, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 257608, "min_us": 235210, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 993680, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 1702175, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 1708910, "min_us": 1695424, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 3404351, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 18145, "cpu_manufacturer": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz", "gpu_renderer": "NVIDIA GeForce GTX 1070/PCIe/SSE2", "gpu_vendor": "NVIDIA Corporation", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 23166, "min_us": 16698, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 181458, "xemu_version": "xemu-0.8.92-master-9d5cf0926aa6f8eb2221e63a2e92bd86b02afae0"}, {"average_us": 42, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 670, "min_us": 32, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4244, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 29792, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 45607, "min_us": 25332, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 297925, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 197795, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 208639, "min_us": 192351, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 988978, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 2220, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 2850, "min_us": 2009, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 111005, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 205, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 521, "min_us": 168, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 10299, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 130418, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 132477, "min_us": 129017, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 521674, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 979043, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 979865, "min_us": 978212, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 1958086, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 10860, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 13138, "min_us": 10116, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 108600, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 32, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 100, "max_us": 642, "min_us": 24, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 3205, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 29796, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 32167, "min_us": 29000, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 297967, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 214799, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 5, "max_us": 218616, "min_us": 211592, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 1073996, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 1876, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 50, "max_us": 2330, "min_us": 1536, "os_system": "Darwin", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 93804, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 109036, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 112222, "min_us": 106267, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-arrays", "total_us": 1090366, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 74722, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 88063, "min_us": 72041, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinearrays", "total_us": 747227, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 499575, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 504668, "min_us": 493931, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlinebuffers", "total_us": 4995755, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 18577, "cpu_manufacturer": "Apple M3 Max", "gpu_renderer": "Apple M3 Max", "gpu_vendor": "Apple", "iso": "xemu-perf-tests-v2025-07-08_16-37-11-883515123.iso", "iterations": 10, "max_us": 18873, "min_us": 18334, "os_system": "Darwin", "renderer": "GL", "suite": "Vertex buffer allocation", "test_name": "Vertex buffer allocation::MixedVtxAlloc-inlineelements", "total_us": 185776, "xemu_version": "xemu-0.8.54-master-0c2a6178192043db8b30c4d61a96129b442102f5"}, {"average_us": 44, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 100, "max_us": 610, "min_us": 32, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-arrays", "total_us": 4476, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 26880, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 28354, "min_us": 25297, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinearrays", "total_us": 268801, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 195145, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 5, "max_us": 199213, "min_us": 192567, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlinebuffers", "total_us": 975727, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 2145, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 2815, "min_us": 1981, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::HighVtxCount-inlineelements", "total_us": 107274, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 223, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 50, "max_us": 1767, "min_us": 167, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-arrays", "total_us": 11176, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 132056, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 4, "max_us": 134189, "min_us": 130700, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinearrays", "total_us": 528224, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 974715, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 2, "max_us": 979708, "min_us": 969714, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlinebuffers", "total_us": 1949431, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}, {"average_us": 10826, "cpu_manufacturer": "AMD Ryzen 9 6900HX with Radeon Graphics", "gpu_renderer": "AMD Radeon RX 6600M", "gpu_vendor": "ATI Technologies Inc.", "iso": "xemu-perf-tests-v2025-07-07_00-41-56-226914996.iso", "iterations": 10, "max_us": 12558, "min_us": 9999, "os_system": "Windows", "renderer": "GL", "suite": "High vertex count", "test_name": "High vertex count::MixedVtxCount-inlineelements", "total_us": 108269, "xemu_version": "xemu-0.8.92-4-gfe356d27a4- -fe356d27a428c676846d20bab7f6fd21a210bbb1"}];

    const chartsContainer = document.getElementById("charts-container");
    const selector = document.getElementById("slice-selector");
    const outlierCheckbox = document.getElementById("outlier-checkbox");

    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    const fullscreenChartDiv = document.getElementById("fullscreen-chart");
    const closeFullscreenBtn = document.getElementById("close-fullscreen");

    closeFullscreenBtn.addEventListener("click", () => {
        fullscreenOverlay.style.display = "none";
        Plotly.purge(fullscreenChartDiv);
    });

    const searchInput = document.getElementById("search-box");

    const comparisonSchemes = {
        "by-cpu": {field: "cpu_manufacturer", title: "CPU"},
        "by-gpu": {field: "gpu_renderer", title: "GPU"},
        "by-gpu-vendor": {field: "gpu_vendor", title: "GPU Vendor"},
        "by-os": {field: "os_system", title: "Operating System"},
        "by-renderer": {field: "renderer", title: "Renderer Backend"},
        "by-version": {field: "xemu_version", title: "xemu Version"},
    };

    for (const key in comparisonSchemes) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = comparisonSchemes[key].title;
        selector.appendChild(option);
    }

    const savedMode = localStorage.getItem("xemuPerfChartMode");
    const savedOutlier = localStorage.getItem("xemuPerfExcludeOutlier");

    if (savedMode && comparisonSchemes[savedMode]) {
        selector.value = savedMode;
    } else {
        selector.value = "by-version";
    }
    if (savedOutlier) {
        outlierCheckbox.checked = (savedOutlier === "true");
    } else {
        outlierCheckbox.checked = true;
    }

    const responsiveChartConfig = {responsive: true};

    function shortVersion(xemu_version) {
        
        

        match = xemu_version.match(/xemu-([0-9]+.[0-9]+.[0-9]+)-([0-9]+)-g.+-(.+)-.+/);
        if (match && match[1]) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }

        match = xemu_version.match(/xemu-([0-9]+.[0-9]+.[0-9]+)-master-.*/);
        if (match && match[1]) {
            return `${match[1]}`;
        }

        return xemu_version;
    }

    function renderSummaryChart(scheme, processedData) {
        const summaryChartDiv = document.createElement("div");
        summaryChartDiv.className = "chart-container";
        chartsContainer.appendChild(summaryChartDiv);

        const means = {};
        for (const d of processedData) {
            const category = d[scheme.field];
            if (!means[category]) {
                means[category] = {total_us: 0, count: 0};
            }
            means[category].total_us += d.average_us;
            means[category].count++;
        }

        const summaryData = Object.entries(means).map(([category, totals]) => {
            const displayCategory = (scheme.field === "xemu_version") ? shortVersion(category) : category;
            return {
                category: displayCategory,
                score: (totals.total_us / totals.count) / 1000.0,
                points: totals.count
            };
        });

        const trace = {
            type: "bar",
            x: summaryData.map(d => d.category),
            y: summaryData.map(d => d.score),
            customdata: summaryData.map(d => d.points),
            hovertemplate: "<b>%{y}</b><br>" +
                "Num data points: %{customdata}" +
                "<extra></extra>"
        };

        const layout = {
            title: {
                text: "Overall average duration (lower is better)",
                font: {
                    family: "Arial",
                    size: 22
                },
                x: 0.5,
                xanchor: 'center'
            },
            xaxis: {
                ...kCommonXAxisConfig,
                title: scheme.title,
            },
            yaxis: {title: "Sum of averages"},
            hoverlabel: kTooltipConfig
        };
        Plotly.newPlot(summaryChartDiv, [trace], layout, responsiveChartConfig);

        const expandButton = document.createElement("button");
        expandButton.textContent = "Expand";
        expandButton.className = "expand-button";
        summaryChartDiv.appendChild(expandButton);

        expandButton.addEventListener("click", () => {
            const fullscreenLayout = JSON.parse(JSON.stringify(layout));
            fullscreenLayout.title.font = {size: 24};
            fullscreenOverlay.style.display = "block";
            Plotly.newPlot(fullscreenChartDiv, [trace], fullscreenLayout, {responsive: true});
        });
    }

    function symbolForRendererBackend(renderer_backend) {
        if (renderer_backend === "GL") {
            return "circle";
        }

        if (renderer_backend === "VK") {
            return "star-open-dot";
        }

        return "x";
    }

    function filteredTestsByName(processedData, filterText) {
        let testsByName = processedData.reduce((acc, d) => {
            (acc[d.test_name] = acc[d.test_name] || []).push(d);
            return acc;
        }, {});

        if (!filterText) {
            return testsByName;
        }

        const filteredTests = {};
        for (const testName in testsByName) {
            if (testName.toLowerCase().includes(filterText)) {
                filteredTests[testName] = testsByName[testName];
            }
        }
        return filteredTests;
    }

    function renderTestResultCharts(selectedSchemeKey, scheme, processedData, filterText) {
        const testsByName = filteredTestsByName(processedData, filterText)

        for (const testName in testsByName) {
            const chartDiv = document.createElement("div");
            chartDiv.className = "chart-container";
            chartsContainer.appendChild(chartDiv);

            const testData = testsByName[testName];

            let traces;
            let layout;

            if (selectedSchemeKey === "by-version") {
                traces = [{
                    type: "scatter",
                    mode: "markers",
                    marker: {
                        ...kCommonMarkerConfig,
                        symbol: testData.map(d => symbolForRendererBackend(d.renderer))
                    },
                    x: testData.map(d => shortVersion(d[scheme.field])),
                    y: testData.map(d => d.average_ms),
                    transforms: [{
                        type: "groupby",
                        groups: testData.map(d => d[scheme.field])
                    }],
                    customdata: testData.map(d => [
                        d.xemu_version, d.os_system, d.cpu_manufacturer, d.gpu_renderer, d.renderer
                    ]),
                    hovertemplate: "<b>%{y:.2f} ms</b><br>" +
                        "Xemu    %{customdata[0]}<br>" +
                        "OS      %{customdata[1]}<br>" +
                        "CPU     %{customdata[2]}<br>" +
                        "GPU     %{customdata[3]}<br>" +
                        "Backend %{customdata[4]}<br>" +
                        "<extra></extra>"
                }];

                layout = {
                    title: {
                        text: `${testName} by ${scheme.title}`,
                        font: {
                            family: "Arial",
                            size: 22
                        },
                        x: 0.5,
                        xanchor: 'center'
                    },
                    xaxis: {
                        ...kCommonXAxisConfig,
                        title: scheme.title,
                    },
                    yaxis: {title: "Avg duration (ms)", autorange: true},
                    showlegend: false,
                    hoverlabel: kTooltipConfig
                };

            } else {
                traces = [];
                const versions = testData.reduce((acc, d) => {
                    (acc[d.xemu_version] = acc[d.xemu_version] || []).push(d);
                    return acc;
                }, {});

                for (const version in versions) {
                    const versionData = versions[version];
                    traces.push({
                        type: "scatter",
                        mode: "markers",
                        name: shortVersion(version),
                        marker: {
                            ...kCommonMarkerConfig,
                            symbol: versionData.map(d => symbolForRendererBackend(d.renderer))
                        },
                        x: versionData.map(d => d[scheme.field]),
                        y: versionData.map(d => d.average_ms),
                        customdata: versionData.map(d => [
                            d.xemu_version, d.os_system, d.cpu_manufacturer, d.gpu_renderer, d.renderer
                        ]),
                        hovertemplate: "<b>%{y:.2f} ms</b><br>" +
                            "Xemu    %{customdata[0]}<br>" +
                            "OS      %{customdata[1]}<br>" +
                            "CPU     %{customdata[2]}<br>" +
                            "GPU     %{customdata[3]}<br>" +
                            "Backend %{customdata[4]}<br>" +
                            "<extra></extra>"
                    });
                }

                layout = {
                    title: {
                        text: `${testName} by ${scheme.title}`,
                        font: {
                            family: "Arial",
                            size: 22
                        },
                        x: 0.5,
                        xanchor: 'center'
                    },
                    xaxis: {
                        ...kCommonXAxisConfig,
                        title: scheme.title,
                    },
                    yaxis: {title: "Avg duration (ms)", autorange: true},
                    showlegend: true,
                    hoverlabel: kTooltipConfig,
                    margin: {t: 50}
                };
            }
            Plotly.newPlot(chartDiv, traces, layout, responsiveChartConfig);

            const expandButton = document.createElement("button");
            expandButton.textContent = "Expand";
            expandButton.className = "expand-button";
            chartDiv.appendChild(expandButton);

            expandButton.addEventListener("click", () => {
                const fullscreenLayout = JSON.parse(JSON.stringify(layout));
                if (fullscreenLayout.title) {
                    fullscreenLayout.title.font = {size: 24};
                }
                fullscreenOverlay.style.display = "block";
                Plotly.newPlot(fullscreenChartDiv, traces, fullscreenLayout, {responsive: true});
            });
        }
    }

    function renderAllCharts() {
        const excludeOutliers = outlierCheckbox.checked;
        const selectedSchemeKey = selector.value;
        const scheme = comparisonSchemes[selectedSchemeKey];
        const filterText = searchInput.value.toLowerCase().trim();

        localStorage.setItem("xemuPerfChartMode", selectedSchemeKey);
        localStorage.setItem("xemuPerfExcludeOutlier", excludeOutliers);

        chartsContainer.innerHTML = "";

        if (!allRawData || allRawData.length === 0) {
            chartsContainer.innerHTML = "<p>No data available to display.</p>";
            return;
        }

        const processedData = allRawData.map(d => {
            if (excludeOutliers && d.iterations > 1) {
                const newAverage = (d.total_us - d.max_us) / (d.iterations - 1);
                return {
                    ...d,
                    average_us: newAverage,
                    average_ms: newAverage / 1000.0
                };
            }
            return {
                ...d,
                average_ms: d.average_us / 1000.0
            };
        });

        if (!filterText) {
            renderSummaryChart(scheme, processedData);
        }
        renderTestResultCharts(selectedSchemeKey, scheme, processedData, filterText);
    }

    selector.addEventListener("change", renderAllCharts);
    outlierCheckbox.addEventListener("change", renderAllCharts);
    searchInput.addEventListener("input", renderAllCharts);

    renderAllCharts();
});