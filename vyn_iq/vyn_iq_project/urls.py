from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('dashboard.urls')),
    path('api/ai/', include('ai_engine.urls')),
    path('api/tasks/', include('task_management.urls')),
    path('api/ideas/', include('idea_forge.urls')),
    path('api/staff/', include('staff_management.urls')),
    path('api/finance/', include('finance.urls')),
    path('api/labs/', include('daily_labs.urls')),
    path('api/journal/', include('journal.urls')),
]
