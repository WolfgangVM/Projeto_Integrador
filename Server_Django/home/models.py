from django.db import models

class locations(models.Model):
    nome = models.CharField(max_length=100)
    latitude = models.FloatField()
    longetude = models.FloatField()

def __str__(self):
    return self.nome