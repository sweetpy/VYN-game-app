from django.contrib.auth.models import User
from task_management.models import Task

def run():
    user = User.objects.first()
    if not user:
        user = User.objects.create_user('testuser', 'test@test.com', 'testpassword')

    Task.objects.all().delete()

    tasks = [
        {"title": "Finish Q4 report", "description": "Complete the financial report for the last quarter.", "completed": False},
        {"title": "Hire new marketing manager", "description": "Interview candidates and hire a new marketing manager for BodaVolt.", "completed": False},
        {"title": "Plan team offsite", "description": "Organize a team offsite for the Safari Surf team.", "completed": True},
    ]

    for task_data in tasks:
        Task.objects.create(user=user, **task_data)

    print("Tasks populated successfully!")
