from django.shortcuts import render

from rest_framework import viewsets

from .serializers import PodcastSerializer
from .models import Podcast

class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all().order_by('id')
    serializer_class = PodcastSerializer
    http_method_names = ['get']
