from rest_framework import viewsets
from .models import Transaction, PersonalDebt
from .serializers import TransactionSerializer, PersonalDebtSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        business_id = self.request.query_params.get('business', None)
        if business_id is not None:
            queryset = queryset.filter(business__id=business_id)
        return queryset

class PersonalDebtViewSet(viewsets.ModelViewSet):
    queryset = PersonalDebt.objects.all()
    serializer_class = PersonalDebtSerializer
