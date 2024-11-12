# chat/views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import ChatMessage

def chat_home(request):
    resposta = ""
    if request.method == "POST":
        pergunta = request.POST.get('pergunta')
        
        if pergunta:
            # Tenta buscar a pergunta no banco de dados
            chat_message, created = ChatMessage.objects.get_or_create(
                question=pergunta,
                defaults={"answer": "Por favor, edite a resposta."}
            )

            # Caso a pergunta já exista, a resposta pode ser atualizada ou mostrada diretamente
            if not created:
                resposta = chat_message.answer
            else:
                resposta = "Nova pergunta cadastrada: " + chat_message.answer

    return render(request, 'chat/home.html', {'resposta': resposta})

def save_message(request):
    if request.method == "POST":
        question = request.POST.get("question")
        
        # Evitar perguntas duplicadas e criar uma nova
        if question:
            chat_message, created = ChatMessage.objects.get_or_create(
                question=question,
                defaults={"answer": "Exemplo de resposta"}  # Definir uma resposta padrão
            )
            if not created:
                # Se a pergunta já existe, você pode definir uma lógica para atualizar a resposta
                chat_message.answer = "Resposta atualizada!"
                chat_message.save()
                
            return JsonResponse({"status": "success", "answer": chat_message.answer})
    
    return JsonResponse({"status": "fail", "error": "Invalid request method"})
