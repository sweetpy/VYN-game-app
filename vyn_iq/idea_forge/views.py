from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Idea, Project
from .serializers import IdeaSerializer, ProjectSerializer, ProjectCreateSerializer

class IdeaViewSet(viewsets.ModelViewSet):
    serializer_class = IdeaSerializer
    permission_classes = [IsAuthenticated]
    queryset = Idea.objects.all()

    def get_queryset(self):
        return Idea.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()

    def get_queryset(self):
        return Project.objects.filter(idea__user=self.request.user)

    def get_serializer_class(self):
        if self.action == 'create':
            return ProjectCreateSerializer
        return ProjectSerializer
