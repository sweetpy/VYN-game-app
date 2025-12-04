from rest_framework import serializers
from .models import DailyExperiment, IncomeTarget

class DailyExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyExperiment
        fields = '__all__'

class IncomeTargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeTarget
        fields = '__all__'
