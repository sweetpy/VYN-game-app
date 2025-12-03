package com.vyn.iq.ui.charts

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Verified
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.vyn.iq.ui.SectionHeader

private data class PipelineItem(val title: String, val tag: String, val progress: Float)

@Composable
fun PipelineBoard() {
    SectionHeader(title = "Pipeline")
    val stages = mapOf(
        "Brainstorm" to listOf(PipelineItem("AI voice pods", "AI", 0.3f)),
        "Validation" to listOf(PipelineItem("Locker pilot", "Logistics", 0.4f)),
        "MVP" to listOf(PipelineItem("Merchant dashboard", "SaaS", 0.65f)),
        "Launch" to listOf(PipelineItem("Guild staffing", "Ops", 0.8f)),
        "Growth" to listOf(PipelineItem("Wholesale club", "Retail", 0.55f)),
        "Profit" to listOf(PipelineItem("AI upsell", "AI", 0.9f))
    )

    LazyRow(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        items(stages.entries.toList()) { (stage, items) ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Column(modifier = Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text(stage, fontWeight = FontWeight.Bold)
                    items.forEach { card ->
                        Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF1D1D26))) {
                            Column(modifier = Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                                Text(card.title, fontWeight = FontWeight.Bold)
                                Text(card.tag, color = Color(0xFFC7A54D))
                                LinearProgressIndicator(progress = card.progress)
                                Row(horizontalArrangement = Arrangement.SpaceBetween, modifier = Modifier.fillMaxWidth()) {
                                    Text("Drag to move")
                                    Icon(Icons.Default.ChevronRight, contentDescription = null)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun TaskManager() {
    SectionHeader(title = "Tasks")
    val tasks = listOf(
        "AI Tasks" to listOf("Check LTV cohort alert", "Draft insight summary"),
        "Business Tasks" to listOf("Call supplier", "Approve promo"),
        "Income Tasks" to listOf("Push flash sale", "Collect invoices"),
        "Personal Tasks" to listOf("Morning run", "Read 10 pages"),
    )

    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        tasks.forEach { (section, entries) ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Column(modifier = Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Row(horizontalArrangement = Arrangement.SpaceBetween, modifier = Modifier.fillMaxWidth()) {
                        Text(section, fontWeight = FontWeight.Bold)
                        Icon(Icons.Default.Verified, contentDescription = null, tint = Color(0xFFC7A54D))
                    }
                    entries.forEach { task ->
                        Text("• $task")
                    }
                }
            }
        }
    }
}

@Composable
fun IncomeLabProgress() {
    SectionHeader(title = "25K/day Income Lab")
    Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text("Target: 25,000 TZS", fontWeight = FontWeight.Bold)
            LinearProgressIndicator(progress = 0.42f)
            Text("Current: 10,500 TZS today")
            Text("Suggested: run AI-led bundle for VIP list")
        }
    }
}

@Composable
fun FinanceBrain() {
    SectionHeader(title = "Finance Brain")
    Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Text("Cashflow", fontWeight = FontWeight.Bold)
            LinearProgressIndicator(progress = 0.6f, color = Color(0xFFC7A54D))
            Text("Income: +TZS 2.4M this week")
            Text("Expenses: -TZS 1.3M (payroll heavy)")
            Text("Debt countdown: 72 days left")
            Text("Offshore plan: 35% complete")
        }
    }
}

@Composable
fun StaffDeck() {
    SectionHeader(title = "Staff")
    val staffers = listOf(
        "Amina – COO" to "On-track • Logistics partner RFP",
        "Juma – CFO" to "Reviewing P&L export",
        "Lydia – Strategy" to "Testing AI market scan",
    )

    Row(horizontalArrangement = Arrangement.spacedBy(12.dp), modifier = Modifier.fillMaxWidth()) {
        staffers.forEach { (title, detail) ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Column(
                    modifier = Modifier
                        .padding(12.dp)
                        .width(160.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    Text(title, fontWeight = FontWeight.Bold)
                    Text(detail, color = Color.LightGray)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text("AI Delegation ready", color = Color(0xFFC7A54D))
                }
            }
        }
    }
}
