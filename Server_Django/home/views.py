from django.shortcuts import render

def home(request):
    return render(request, 'index.html',)

def contato(request):
    return render(request, 'contato.html')

def info(request):
    return render (request, 'info.html')
