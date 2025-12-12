from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Recommendation
from .serializers import RecommendationSerializer

class RecommendationViewSet(viewsets.ModelViewSet):
    serializer_class = RecommendationSerializer
    permission_classes = [IsAuthenticated]
    queryset = Recommendation.objects.all()

    def get_queryset(self):
        return Recommendation.objects.filter(user=self.request.user)
