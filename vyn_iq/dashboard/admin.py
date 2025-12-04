from django.contrib import admin
from .models import Business, DailyFinancials, Alert

admin.site.register(Business)
admin.site.register(DailyFinancials)
admin.site.register(Alert)
