from django.db import models

class Local(models.Model):
    nome = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=10, decimal_places=8)
    longitude = models.DecimalField(max_digits=11, decimal_places=8)

    def __str__(self):
        return self.nome