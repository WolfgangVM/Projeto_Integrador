from django.shortcuts import render
from django.http import HttpRequest
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Local
import json

def home(request):
    return render(request, 'index.html',)

def contato(request):
    return render(request, 'contato.html')

def info(request):
    return render (request, 'info.html')
