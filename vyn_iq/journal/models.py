from django.db import models

class JournalEntry(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    voice_content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
