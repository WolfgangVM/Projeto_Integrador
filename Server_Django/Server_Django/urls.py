"""
URL configuration for Server_Django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

#from django.contrib import admin
#from django.urls import path
#from home import views
#from django.conf import settings
#from django.conf.urls.static import static

#urlpatterns = [
   #path('admin/',admin.site.urls),
   #path('', views.home, name='index'),
   #path('contato/', views.contato, name='contato'),
   #path('info/', views.info, name='info'),
 
#]
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Server_Django/urls.py
from django.contrib import admin
from django.urls import path
from home import views as home_views
from chat import views as chat_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_views.home, name='index'),  # Corrigido para importar de home_views
    path('contato/', home_views.contato, name='contato'),
    path('info/', home_views.info, name='info'),
    path('chat/', chat_views.chat_home, name='chat_home'),
    path('chat/save_message/', chat_views.save_message, name='save_message'),
    path('chat/save_comment/', home_views.save_comment, name='save_comment'),  # Nova URL para salvar comentário
    path('fetch_last_comment/', chat_views.fetch_last_comment, name='fetch_last_comment'),
    


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

