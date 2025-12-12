from django.contrib.auth.models import User
from gamification.models import EmpireState

def run():
    User.objects.all().delete()
    user = User.objects.create_user('testuser', 'test@test.com', 'testpassword')
    EmpireState.objects.create(user=user)
    print("Test user and EmpireState created.")
