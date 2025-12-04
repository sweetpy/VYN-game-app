from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from gamification.models import EmpireState

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
                empire_state, created = EmpireState.objects.get_or_create(user=user)
                empire_state.xp += 10 # Award 10 XP for completing a task
                empire_state.empire_score += 10

                # Simple leveling system: 100 XP to level up
                if empire_state.xp >= 100:
                    empire_state.level += 1
                    empire_state.xp %= 100

                empire_state.save()
