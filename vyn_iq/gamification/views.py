from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import EmpireState, Achievement
from .serializers import EmpireStateSerializer, AchievementSerializer

class EmpireStateViewSet(viewsets.ModelViewSet):
    serializer_class = EmpireStateSerializer
    permission_classes = [IsAuthenticated]
    queryset = EmpireState.objects.all()

    def get_queryset(self):
        return EmpireState.objects.filter(user=self.request.user)

class AchievementViewSet(viewsets.ModelViewSet):
    serializer_class = AchievementSerializer
    permission_classes = [IsAuthenticated]
    queryset = Achievement.objects.all()

    def get_queryset(self):
        return self.request.user.achievements.all()
