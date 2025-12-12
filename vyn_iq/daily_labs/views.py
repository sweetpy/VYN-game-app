from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import DailyExperiment, IncomeTarget
from .serializers import DailyExperimentSerializer, IncomeTargetSerializer

class DailyExperimentViewSet(viewsets.ModelViewSet):
    serializer_class = DailyExperimentSerializer
    permission_classes = [IsAuthenticated]
    queryset = DailyExperiment.objects.all()

    def get_queryset(self):
        return DailyExperiment.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class IncomeTargetViewSet(viewsets.ModelViewSet):
    serializer_class = IncomeTargetSerializer
    permission_classes = [IsAuthenticated]
    queryset = IncomeTarget.objects.all()

    def get_queryset(self):
        return IncomeTarget.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
