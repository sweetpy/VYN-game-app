from gamification.models import Achievement

def run():
    Achievement.objects.all().delete()
    Achievement.objects.create(
        title="First Task Completed",
        description="You completed your first task!"
    )
    print("Achievements created.")
