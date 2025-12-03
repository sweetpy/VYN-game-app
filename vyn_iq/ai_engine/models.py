from django.db import models
from dashboard.models import Business

class Recommendation(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=255)
    recommendation = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
