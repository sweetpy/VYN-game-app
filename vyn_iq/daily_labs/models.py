from django.db import models

class DailyExperiment(models.Model):
    idea = models.CharField(max_length=255)
    result = models.TextField()
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    time_to_cash = models.DurationField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.idea

class IncomeTarget(models.Model):
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    date = models.DateField()

    def __str__(self):
        return f"Income Target for {self.date}: {self.target_amount}"
