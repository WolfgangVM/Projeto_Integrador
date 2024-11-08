from django.db import models


class PontoDescarte(models.Model):
    nome = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    tipo_material = models.CharField(max_length=100)

    def __str__(self):
        return self.nome