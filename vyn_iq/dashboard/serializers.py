from rest_framework import serializers
from .models import Business, DailyFinancials, Alert

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'

class DailyFinancialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyFinancials
        fields = '__all__'

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = '__all__'
