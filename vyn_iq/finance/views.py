from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Transaction, PersonalDebt
from .serializers import TransactionSerializer, PersonalDebtSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]
    queryset = Transaction.objects.all()

    def get_queryset(self):
        queryset = Transaction.objects.filter(business__user=self.request.user)
        business_id = self.request.query_params.get('business', None)
        if business_id is not None:
            queryset = queryset.filter(business__id=business_id)
        return queryset

class PersonalDebtViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalDebtSerializer
    permission_classes = [IsAuthenticated]
    queryset = PersonalDebt.objects.all()

    def get_queryset(self):
        return PersonalDebt.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
