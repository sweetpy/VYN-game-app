from rest_framework import serializers
from .models import EmpireState, Achievement

class EmpireStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpireState
        fields = '__all__'

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'
