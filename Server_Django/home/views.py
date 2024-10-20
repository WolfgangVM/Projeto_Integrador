from django.shortcuts import render
from django.http import HttpRequest
from .models import locations
import json

def home(request):
    return render(request, 'index.html',)

def contato(request):
    return render(request, 'contato.html')
