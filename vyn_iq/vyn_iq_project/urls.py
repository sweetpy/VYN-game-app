from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('dashboard.urls')),
    path('api/ai/', include('ai_engine.urls')),
    path('api/tasks/', include('task_management.urls')),
]
