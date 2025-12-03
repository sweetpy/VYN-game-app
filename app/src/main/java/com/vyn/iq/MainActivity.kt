package com.vyn.iq

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.rememberBottomSheetScaffoldState
import androidx.compose.material3.BottomSheetScaffold
import androidx.compose.material3.Button
import androidx.compose.material3.Divider
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.vyn.iq.ui.DummyData
import com.vyn.iq.ui.SectionHeader
import com.vyn.iq.ui.charts.FinanceBrain
import com.vyn.iq.ui.charts.IncomeLabProgress
import com.vyn.iq.ui.charts.PipelineBoard
import com.vyn.iq.ui.charts.StaffDeck
import com.vyn.iq.ui.charts.TaskManager
import com.vyn.iq.ui.theme.VynTheme

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            VynTheme {
                val sheetState = rememberBottomSheetScaffoldState()
                val (selectedTab, onTabSelected) = remember { mutableStateOf(BottomDestination.BUSINESSES) }

                BottomSheetScaffold(
                    scaffoldState = sheetState,
                    sheetPeekHeight = 64.dp,
                    sheetContent = { AiBrainSheet() },
                    content = { innerPadding ->
                        MainScreen(
                            modifier = Modifier.padding(innerPadding),
                            selectedTab = selectedTab,
                            onTabSelected = onTabSelected
                        )
                    }
                )
            }
        }
    }
}

@Composable
private fun AiBrainSheet() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(
                Brush.verticalGradient(
                    listOf(Color(0xFF0B0B0F), Color(0xFF171723))
                )
            )
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        SectionHeader(title = "AI Brain")
        DummyData.aiHighlights.forEach { highlight ->
            Text(text = "• $highlight", style = MaterialTheme.typography.bodyLarge)
        }
        Divider(color = MaterialTheme.colorScheme.secondary.copy(alpha = 0.4f))
        Text("CFO Chat", fontWeight = FontWeight.Bold)
        Text("Cash runway healthy; recommend reinvesting 15% into MVP experiments.")
        Text("COO Chat", fontWeight = FontWeight.Bold)
        Text("Validate logistics partner for warehouse files; target 48h delivery.")
        Button(onClick = {}) {
            Text("Open Full Panel")
        }
    }
}

enum class BottomDestination(val label: String, val icon: @Composable () -> Unit) {
    BUSINESSES("Businesses", { Icon(Icons.Default.Apartment, contentDescription = null) }),
    FINANCE("Finance", { Icon(Icons.Default.AccountBalance, contentDescription = null) }),
    WAREHOUSE("Warehouse", { Icon(Icons.Default.Folder, contentDescription = null) }),
    HQ("HQ", { Icon(Icons.Default.Home, contentDescription = null) })
}

@Composable
fun MainScreen(
    modifier: Modifier = Modifier,
    selectedTab: BottomDestination,
    onTabSelected: (BottomDestination) -> Unit
) {
    Scaffold(
        modifier = modifier.fillMaxSize(),
        topBar = {
            TopAppBar(
                title = { Text("VYN Empire") },
                actions = {
                    IconButton(onClick = {}) { Icon(Icons.Default.Lightbulb, contentDescription = "Insights") }
                    IconButton(onClick = {}) { Icon(Icons.Default.Notifications, contentDescription = "Alerts") }
                }
            )
        },
        bottomBar = {
            NavigationBar {
                BottomDestination.values().forEach { destination ->
                    NavigationBarItem(
                        selected = destination == selectedTab,
                        onClick = { onTabSelected(destination) },
                        icon = { destination.icon() },
                        label = { Text(destination.label) }
                    )
                }
            }
        }
    ) { inner ->
        Surface(modifier = Modifier.padding(inner)) {
            when (selectedTab) {
                BottomDestination.BUSINESSES -> EmpireMap()
                BottomDestination.FINANCE -> FinanceBrain()
                BottomDestination.WAREHOUSE -> WarehouseScreen()
                BottomDestination.HQ -> HqScreen()
            }
        }
    }
}

@Composable
private fun EmpireMap() {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFF0B0B0F))
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                StatPill("Empire Score", "912,440")
                StatPill("Net Worth", "$4.2M")
                StatPill("Gems", "2,450")
            }
        }
        item { SectionHeader("Map Buildings") }
        items(DummyData.buildings) { building ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text(building.name, fontWeight = FontWeight.Bold)
                        Text(building.status, color = Color.LightGray)
                        Text("Profit today: ${building.profit}")
                    }
                    Column(horizontalAlignment = Alignment.End) {
                        building.warnings.forEach { warning ->
                            Text(warning, color = Color(0xFFC7A54D))
                        }
                        Spacer(Modifier.height(8.dp))
                        Icon(Icons.Default.ArrowForward, contentDescription = null)
                    }
                }
            }
        }
        item { SectionHeader("Actions") }
        item {
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                ActionColumn(title = "Right Actions", actions = DummyData.rightActions)
                ActionColumn(title = "Left Actions", actions = DummyData.leftActions)
            }
        }
        item { IdeaForgeSection() }
        item { PipelineBoard() }
        item { TaskManager() }
        item { DailyLab() }
        item { IncomeLabProgress() }
        item { StaffDeck() }
    }
}

@Composable
private fun StatPill(label: String, value: String) {
    Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF171723))) {
        Column(modifier = Modifier.padding(12.dp)) {
            Text(label, color = Color(0xFFC7A54D), fontWeight = FontWeight.Bold)
            Text(value, style = MaterialTheme.typography.titleMedium)
        }
    }
}

@Composable
private fun ActionColumn(title: String, actions: List<String>) {
    Column(
        modifier = Modifier.weight(1f),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(title, fontWeight = FontWeight.Bold)
        actions.forEach { action ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(12.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(action)
                    Icon(Icons.Default.ChevronRight, contentDescription = null)
                }
            }
        }
    }
}

@Composable
private fun IdeaForgeSection() {
    SectionHeader(title = "Idea Forge")
    Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text("Generate next business move", style = MaterialTheme.typography.titleMedium)
            DummyData.ideas.forEach { (title, detail) ->
                Column {
                    Text(title, fontWeight = FontWeight.Bold, color = Color(0xFFC7A54D))
                    Text(detail)
                    Divider(modifier = Modifier.padding(vertical = 8.dp))
                }
            }
            Button(onClick = {}) { Text("Move to Pipeline →") }
        }
    }
}

@Composable
private fun DailyLab() {
    SectionHeader(title = "Daily Lab")
    Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text("24h Experiment: Flash Sale Bundle", fontWeight = FontWeight.Bold)
            Text("Steps: Prepare bundle → push notification blast → monitor conversion.")
            Text("Expected profit: 620k TZS")
            Text("Timer: 18h left")
            Button(onClick = {}) { Text("AI Debrief") }
        }
    }
}

@Composable
private fun WarehouseScreen() {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        item { SectionHeader(title = "Warehouse") }
        items(DummyData.files) { file ->
            Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(12.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text(file.title, fontWeight = FontWeight.Bold)
                        Text(file.description, color = Color.LightGray)
                    }
                    Icon(Icons.Default.Download, contentDescription = null)
                }
            }
        }
    }
}

@Composable
private fun HqScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        SectionHeader(title = "HQ Upgrades")
        Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Text("Current Level: 4", fontWeight = FontWeight.Bold)
                Text("Benefits: +8% research speed, +5% AI insight accuracy")
                Text("Requirements: 2.4M credits, 800 gems")
                Button(onClick = {}) { Text("Upgrade") }
            }
        }
        SectionHeader(title = "Achievements")
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            DummyData.achievements.forEach { achievement ->
                Card(colors = CardDefaults.cardColors(containerColor = Color(0xFF121217))) {
                    Column(modifier = Modifier.padding(12.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(achievement.title, fontWeight = FontWeight.Bold)
                        Text("XP: ${achievement.xp}")
                        Text(achievement.status, color = Color(0xFFC7A54D))
                    }
                }
            }
        }
    }
}

@Preview
@Composable
private fun PreviewMainScreen() {
    VynTheme { MainScreen(selectedTab = BottomDestination.BUSINESSES, onTabSelected = {}) }
}
