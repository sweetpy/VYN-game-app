from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, PersonalDebtViewSet

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet)
router.register(r'personal-debt', PersonalDebtViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
