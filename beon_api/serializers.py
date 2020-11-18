# serializers.py

from rest_framework import serializers
from .models import Podcast

class PodcastSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Podcast
        fields = ('id', 'title','date','desc','content_link')