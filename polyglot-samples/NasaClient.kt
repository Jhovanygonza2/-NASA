class NasaClient(val apiKey: String) {
    fun fetchDailyImage() {
        println("Fetching APOD with key: $apiKey")
    }
}

fun main() {
    val client = NasaClient("DEMO_KEY")
    client.fetchDailyImage()
}
