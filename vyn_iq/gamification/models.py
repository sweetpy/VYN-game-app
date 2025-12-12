from django.db import models
from django.contrib.auth.models import User

class EmpireState(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    empire_score = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    xp = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s Empire State"

class Achievement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    unlocked_by = models.ManyToManyField(User, related_name='achievements')

    def __str__(self):
        return self.title
