from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IdeaViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'ideas', IdeaViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
