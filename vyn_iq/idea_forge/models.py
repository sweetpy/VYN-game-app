from django.db import models
from django.contrib.auth.models import User

class Idea(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Project(models.Model):
    STAGE_CHOICES = [
        ('BRAINSTORMING', 'Brainstorming'),
        ('VALIDATION', 'Validation'),
        ('MVP', 'MVP'),
        ('LAUNCH', 'Launch'),
        ('GROWTH', 'Growth'),
        ('PROFIT_MONITORING', 'Profit Monitoring'),
    ]

    idea = models.OneToOneField(Idea, on_delete=models.CASCADE)
    stage = models.CharField(max_length=50, choices=STAGE_CHOICES, default='BRAINSTORMING')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Project: {self.idea.title}"
