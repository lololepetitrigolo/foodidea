from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
# Create your views here.

def index(request):
    return render(request, "menu/index.html")

def tous(request):
    return render(request, "menu/tous.html")
    
def recette(request):
    return render(request, "menu/recette.html")