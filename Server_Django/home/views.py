from django.shortcuts import render
from django.http import JsonResponse
from .models import PontoDescarte

def home(request):
    return render(request, 'index.html',)

def contato(request):
    return render(request, 'contato.html')

def info(request):
    return render (request, 'info.html')

def localizacoes_views(request):
    localizacoes = PontoDescarte.objects.all()
    data = []

    for ponto in localizacoes:
        data.append({
            'nome': ponto.nome,
            'latitude': ponto.latitude,  
            'longitude': ponto.longitude, 
        })
    return JsonResponse(data, safe=False)