package com.vyn.iq.ui

data class Building(val name: String, val status: String, val profit: String, val warnings: List<String>)
data class FileItem(val title: String, val description: String)
data class Achievement(val title: String, val xp: Int, val status: String)

data object DummyData {
    val buildings = listOf(
        Building("AI Foundry", "Stable", "TZS 480k", listOf("Stock: OK")),
        Building("Logistics Hub", "Watchlist", "TZS 320k", listOf("2 trucks offline")),
        Building("Ecom Mart", "Rallying", "TZS 910k", listOf("Flash sale live")),
    )

    val rightActions = listOf("AI Brain", "Idea Forge", "Pipeline", "Staff", "Events", "Alerts")
    val leftActions = listOf("Tasks", "Daily Lab", "Income Lab", "Journal")

    val ideas = listOf(
        "Business Name" to "VYN Cargo Express",
        "Model" to "B2B just-in-time micro-warehousing",
        "Market Snapshot" to "TZ ecom up 14% MoM; last-mile gaps in secondary cities",
        "30/60/90 Plan" to "30d: validate partners; 60d: MVP lockers; 90d: scale to 3 cities",
        "Cost Estimate" to "TZS 48M capex; TZS 6M monthly burn"
    )

    val aiHighlights = listOf(
        "Performance drop detected at Logistics Hub (-7%)",
        "Opportunity: upsell AI voice agent to VIP merchants",
        "Risk: warehouse cooling running hot (82%)"
    )

    val files = listOf(
        FileItem("P&L Export", "CSV – last 30 days"),
        FileItem("Investor Deck", "Latest pitch v2"),
        FileItem("AI Insights", "PDF snapshots of alerts")
    )

    val achievements = listOf(
        Achievement("Streak 7", 120, "Daily trophies +2"),
        Achievement("XP Lv. 5", 420, "Milestone unlocked"),
        Achievement("Gold Vault", 250, "Complete 25K/day challenge")
    )
}
