<!-- Real Work part 
    
    build form → call API → create/read/update/delete data

        Meaning:
            Nuxt form → Django REST API → database


    Example project: Task CRUD

    CRUD operations:
        Create → POST
        Read → GET
        Update → PUT/PATCH
        Delete → DELETE

    Django

        djangorestframework

            This is the package that turns normal Django into an API backend.

            Normal Django usually returns HTML pages.

            Django REST Framework returns JSON data.

            Django REST Framework is used to build Web APIs. 
            ModelViewSet can automatically support list, retrieve, create, update, partial update, and delete actions.
        
        django-cors-headers

            This package allows Nuxt to talk to Django.
        
        Simple Version:
            djangorestframework  → make Django API
            django-cors-headers  → allow Nuxt to access Django API

            

        1. Install packages
            pip install djangorestframework django-cors-headers

            You need CORS because Nuxt usually runs on localhost:3000, 
            while Django runs on localhost:8000. CORS allows the browser frontend to call a backend from another origin.

        2. settings.py

            Add these:

            INSTALLED_APPS = [
                # default django apps...
                'rest_framework',
                'corsheaders',
                'tasks',
            ]

            Add middleware near the top:

            MIDDLEWARE = [
                'corsheaders.middleware.CorsMiddleware',
                # other middleware...
            ]

            Allow Nuxt frontend:

            CORS_ALLOWED_ORIGINS = [
                "http://localhost:3000",
            ]

            django-cors-headers uses CORS_ALLOWED_ORIGINS to choose which frontend origins can make requests to Django.

        3. Create model
            # tasks/models.py

            from django.db import models

            class Task(models.Model):
                title = models.CharField(max_length=255)
                completed = models.BooleanField(default=False)
                created_at = models.DateTimeField(auto_now_add=True)

                def __str__(self):
                    return self.title

            Then run:

            python manage.py makemigrations
            python manage.py migrate

        4. Create serializer

            Serializer converts Django model data into JSON.

            # tasks/serializers.py

            from rest_framework import serializers
            from .models import Task

            class TaskSerializer(serializers.ModelSerializer):
                class Meta:
                    model = Task
                    fields = '__all__'

        5. Create API view
            # tasks/views.py

            from rest_framework.viewsets import ModelViewSet
            from .models import Task
            from .serializers import TaskSerializer

            class TaskViewSet(ModelViewSet):
                queryset = Task.objects.all().order_by('-created_at')
                serializer_class = TaskSerializer

            ModelViewSet gives you common CRUD actions without writing every function manually.

        6. Create API route
            # tasks/urls.py

            from rest_framework.routers import DefaultRouter
            from .views import TaskViewSet

            router = DefaultRouter()
            router.register('tasks', TaskViewSet)

            urlpatterns = router.urls

            Then connect it to main project URL:

            # project/urls.py

            from django.contrib import admin
            from django.urls import path, include

            urlpatterns = [
                path('admin/', admin.site.urls),
                path('api/', include('tasks.urls')),
            ]

            Now your API becomes:

            GET     http://localhost:8000/api/tasks/
            POST    http://localhost:8000/api/tasks/
            PATCH   http://localhost:8000/api/tasks/1/
            DELETE  http://localhost:8000/api/tasks/1/


-->