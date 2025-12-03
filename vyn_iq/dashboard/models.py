from django.db import models

class Business(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    worth = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    bank_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    cashflow = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    runway = models.IntegerField(default=0)  # in days
    health_score = models.IntegerField(default=100) # 0-100

    def __str__(self):
        return self.name

class DailyFinancials(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    date = models.DateField()
    income = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    expenses = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def __str__(self):
        return f"{self.business.name} - {self.date}"

class Alert(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
