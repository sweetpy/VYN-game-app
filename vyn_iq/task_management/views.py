from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from gamification.models import EmpireState, Achievement
from notifications.models import Notification

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        instance = serializer.save()
        if instance.completed:
            user = self.request.user
            if user:
                # Award XP
                empire_state, created = EmpireState.objects.get_or_create(user=user)
                empire_state.xp += 10
                empire_state.empire_score += 10

                if empire_state.xp >= 100:
                    empire_state.level += 1
                    empire_state.xp %= 100
                empire_state.save()

                # Check for "First Task Completed" achievement
                if not user.achievements.filter(title="First Task Completed").exists():
                    achievement = Achievement.objects.get(title="First Task Completed")
                    user.achievements.add(achievement)
                    Notification.objects.create(
                        user=user,
                        title="Achievement Unlocked!",
                        message=f"You've earned the '{achievement.title}' achievement."
                    )
