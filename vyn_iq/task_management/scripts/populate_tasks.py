from task_management.models import Task

def run():
    Task.objects.all().delete()

    tasks = [
        {"title": "Finish Q4 report", "description": "Complete the financial report for the last quarter.", "completed": False},
        {"title": "Hire new marketing manager", "description": "Interview candidates and hire a new marketing manager for BodaVolt.", "completed": False},
        {"title": "Plan team offsite", "description": "Organize a team offsite for the Safari Surf team.", "completed": True},
    ]

    for task_data in tasks:
        Task.objects.create(**task_data)

    print("Tasks populated successfully!")
