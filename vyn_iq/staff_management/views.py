from rest_framework import viewsets
from .models import Staff
from .serializers import StaffSerializer

class StaffViewSet(viewsets.ModelViewSet):
    serializer_class = StaffSerializer

    def get_queryset(self):
        queryset = Staff.objects.all()
        business_id = self.request.query_params.get('business', None)
        if business_id is not None:
            queryset = queryset.filter(business__id=business_id)
        return queryset
