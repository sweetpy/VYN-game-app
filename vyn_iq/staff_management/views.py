from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Staff
from .serializers import StaffSerializer

class StaffViewSet(viewsets.ModelViewSet):
    serializer_class = StaffSerializer
    permission_classes = [IsAuthenticated]
    queryset = Staff.objects.all()

    def get_queryset(self):
        queryset = Staff.objects.filter(user=self.request.user)
        business_id = self.request.query_params.get('business', None)
        if business_id is not None:
            queryset = queryset.filter(business__id=business_id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
