# chat/models.py
from django.db import models

class ChatMessage(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    comment = models.TextField(blank=True, null=True)  # Campo opcional para o comentário

    def __str__(self):
        return self.question
