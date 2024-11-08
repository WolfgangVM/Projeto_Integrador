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

    for PontoDescarte in localizacoes:
        data.append({
            'nome': PontoDescarte.nome,
            'latiude': PontoDescarte.latitude,
            'longitude': PontoDescarte.longitude
        })
    return JsonResponse(data, safe=False)