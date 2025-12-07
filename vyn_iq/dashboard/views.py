from rest_framework import viewsets
from .models import Business, DailyFinancials, Alert
from .serializers import BusinessSerializer, DailyFinancialsSerializer, AlertSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

class DailyFinancialsViewSet(viewsets.ModelViewSet):
    queryset = DailyFinancials.objects.all()
    serializer_class = DailyFinancialsSerializer

class AlertViewSet(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer
