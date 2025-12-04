from django.db import models
from django.contrib.auth.models import User
from dashboard.models import Business

class Transaction(models.Model):
    TRANSACTION_TYPE_CHOICES = [
        ('INCOME', 'Income'),
        ('EXPENSE', 'Expense'),
    ]

    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    transaction_type = models.CharField(max_length=7, choices=TRANSACTION_TYPE_CHOICES)
    date = models.DateField()

    def __str__(self):
        return f"{self.transaction_type} of {self.amount} for {self.business.name}"

class PersonalDebt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    due_date = models.DateField()

    def __str__(self):
        return f"Personal Debt: {self.description} - {self.amount}"
