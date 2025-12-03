from rest_framework import serializers
from .models import Transaction, PersonalDebt

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class PersonalDebtSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDebt
        fields = '__all__'
