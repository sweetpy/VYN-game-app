from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('dashboard.urls')),
    path('api/ai/', include('ai_engine.urls')),
    path('api/tasks/', include('task_management.urls')),
    path('api/ideas/', include('idea_forge.urls')),
    path('api/staff/', include('staff_management.urls')),
    path('api/finance/', include('finance.urls')),
    path('api/labs/', include('daily_labs.urls')),
    path('api/journal/', include('journal.urls')),
    path('api/gamification/', include('gamification.urls')),
]
