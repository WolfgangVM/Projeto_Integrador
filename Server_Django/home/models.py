from django.db import models
from django.core.exceptions import ValidationError


class PontoDescarte(models.Model):
    nome = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    tipo_material = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    

class ChatMessage(models.Model):
    question = models.CharField(max_length=255, unique=True)  # Campo para armazenar a pergunta, agora único
    answer = models.TextField()  # Campo para armazenar a resposta

    def clean(self):
        # Verifica se já existe uma pergunta igual antes de salvar
        if ChatMessage.objects.filter(question=self.question).exists():
            raise ValidationError("Esta pergunta já foi cadastrada.")

    def __str__(self):
        return self.question  # Retorna a pergunta como representação do objeto   