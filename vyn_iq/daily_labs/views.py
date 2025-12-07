from rest_framework import viewsets
from .models import DailyExperiment, IncomeTarget
from .serializers import DailyExperimentSerializer, IncomeTargetSerializer

class DailyExperimentViewSet(viewsets.ModelViewSet):
    queryset = DailyExperiment.objects.all()
    serializer_class = DailyExperimentSerializer

class IncomeTargetViewSet(viewsets.ModelViewSet):
    queryset = IncomeTarget.objects.all()
    serializer_class = IncomeTargetSerializer
