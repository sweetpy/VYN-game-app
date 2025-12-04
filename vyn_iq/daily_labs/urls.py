from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DailyExperimentViewSet, IncomeTargetViewSet

router = DefaultRouter()
router.register(r'experiments', DailyExperimentViewSet)
router.register(r'income-targets', IncomeTargetViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
