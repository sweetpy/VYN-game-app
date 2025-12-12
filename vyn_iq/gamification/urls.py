from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmpireStateViewSet, AchievementViewSet

router = DefaultRouter()
router.register(r'empire-state', EmpireStateViewSet)
router.register(r'achievements', AchievementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
