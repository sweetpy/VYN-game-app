from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusinessViewSet, DailyFinancialsViewSet, AlertViewSet

router = DefaultRouter()
router.register(r'businesses', BusinessViewSet)
router.register(r'dailyfinancials', DailyFinancialsViewSet)
router.register(r'alerts', AlertViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
