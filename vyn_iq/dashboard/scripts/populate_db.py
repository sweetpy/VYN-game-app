import random
from django.contrib.auth.models import User
from dashboard.models import Business

def run():
    User.objects.all().delete()
    user = User.objects.create_user('testuser', 'test@test.com', 'testpassword')

    Business.objects.all().delete()

    businesses = [
        {"name": "Safari Surf", "worth": 100000, "bank_balance": 50000, "cashflow": 10000},
        {"name": "BodaVolt", "worth": 75000, "bank_balance": 30000, "cashflow": 5000},
        {"name": "Nest", "worth": 150000, "bank_balance": 80000, "cashflow": 20000},
        {"name": "Tanzanite Tea", "worth": 200000, "bank_balance": 100000, "cashflow": 25000},
    ]

    for business_data in businesses:
        Business.objects.create(user=user, **business_data)

    print("Database populated successfully!")
