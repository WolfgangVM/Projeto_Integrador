from django.shortcuts import render
from django.http import HttpRequest
from .models import locations
import json

def home(request):
    return render(request, 'index.html')

def mapa_view(request):
    locations = list(Location.objects.values('nome', 'latitude', 'longitude'))
    return render(request, 'index.html', {'locations': json.dumps(locations)})