# models.py
from django.db import models

class Podcast(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=60)
    date = models.DateField()
    desc = models.CharField(max_length=1000)    
    content_link = models.CharField(max_length=500) 
    
    def __str__(self):
        return f'{self.id}:{self.title}'


