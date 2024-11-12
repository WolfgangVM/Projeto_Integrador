# home/views.py
from django.shortcuts import render
from chat.models import ChatMessage  # Certifique-se de importar o modelo correto
from django.http import JsonResponse
from .models import PontoDescarte

def home(request):
    return render(request, 'index.html',)

def contato(request):
    resposta = ""
    comentario_salvo = ""
    if request.method == "POST":
        pergunta = request.POST.get('pergunta')
        comentario = request.POST.get('comentario')
        
        if pergunta:
            try:
                # Busca a pergunta no banco de dados
                chat_message = ChatMessage.objects.get(question=pergunta)
                resposta = chat_message.answer
                comentario_salvo = chat_message.comment
            except ChatMessage.DoesNotExist:
                resposta = "Pergunta não encontrada no banco de dados. Por favor, cadastre a resposta."

    return render(request, 'chat/home.html', {'resposta': resposta, 'comentario_salvo': comentario_salvo})

def save_comment(request):
    comentario_salvo = ""
    if request.method == "POST":
        comentario = request.POST.get('comentario')
        
        if comentario:
            # Salva o comentário no banco de dados (pode ser ajustado conforme necessário)
            chat_message = ChatMessage.objects.create(comment=comentario)
            comentario_salvo = chat_message.comment

    return render(request, 'chat/home.html', {'comentario_salvo': comentario_salvo})

def info(request):
    return render(request, 'info.html')

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
