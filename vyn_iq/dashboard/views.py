from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Business, DailyFinancials, Alert
from .serializers import BusinessSerializer, DailyFinancialsSerializer, AlertSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    serializer_class = BusinessSerializer
    permission_classes = [IsAuthenticated]
    queryset = Business.objects.all()

    def get_queryset(self):
        return Business.objects.filter(user=self.request.user)

class DailyFinancialsViewSet(viewsets.ModelViewSet):
    serializer_class = DailyFinancialsSerializer
    permission_classes = [IsAuthenticated]
    queryset = DailyFinancials.objects.all()

    def get_queryset(self):
        return DailyFinancials.objects.filter(business__user=self.request.user)

class AlertViewSet(viewsets.ModelViewSet):
    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    queryset = Alert.objects.all()

    def get_queryset(self):
        return Alert.objects.filter(user=self.request.user)
